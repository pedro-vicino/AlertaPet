import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as Location from 'expo-location';

interface LocationType {
  latitude: number;
  longitude: number;
}

interface PhotoType {
  uri: string;
  name: string;
}

// Localização padrão (São Paulo)
const DEFAULT_LOCATION: LocationType = {
  latitude: -23.550520,
  longitude: -46.633308
};

export default function NewReportScreen() {
  const [animalType, setAnimalType] = useState('');
  const [animalSize, setAnimalSize] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState<LocationType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Adicionar useEffect para gerenciar o event listener
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'location') {
          setLocation({
            latitude: data.latitude,
            longitude: data.longitude
          });
        }
      } catch (error) {
        console.log('Erro ao processar mensagem do mapa:', error);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const getLocation = async () => {
    try {
      setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permissão Negada',
          'Precisamos da sua localização para registrar o animal abandonado.'
        );
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      
      const newLocation = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };
      
      setLocation(newLocation);
    } catch (error) {
      console.log('Erro ao obter localização:', error);
      Alert.alert(
        'Erro ao obter localização',
        'Não foi possível obter sua localização. Por favor, verifique se o GPS está ativado e tente novamente.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!location) {
      Alert.alert(
        'Localização Necessária',
        'Por favor, adicione a localização do animal antes de enviar.'
      );
      return;
    }
    router.push('/confirmation');
  };

  const formatCoordinates = (location: LocationType) => {
    return `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}`;
  };

  const getMapUrl = () => {
    const currentLocation = location || DEFAULT_LOCATION;
    const width = Math.round(Dimensions.get('window').width - 40);
    const height = 200;
    const zoom = 15;
    return `https://maps.googleapis.com/maps/api/staticmap?center=${currentLocation.latitude},${currentLocation.longitude}&zoom=${zoom}&size=${width}x${height}&markers=color:red%7C${currentLocation.latitude},${currentLocation.longitude}&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`;
  };

  const getInteractiveMapHtml = () => {
    const currentLocation = location || DEFAULT_LOCATION;
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
          <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
          <style>
            html, body, #map {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
            }
            .custom-marker {
              background-color: #007AFF;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 0 10px rgba(0,0,0,0.3);
            }
          </style>
        </head>
        <body>
          <div id="map"></div>
          <script>
            const map = L.map('map', {
              zoomControl: true,
              scrollWheelZoom: true,
              dragging: true,
              maxZoom: 19,
              minZoom: 3
            }).setView([${currentLocation.latitude}, ${currentLocation.longitude}], 15);

            // Usando o tile layer mais recente do OpenStreetMap com estilo moderno
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
              maxZoom: 19,
              updateWhenIdle: true,
              updateWhenZooming: false
            }).addTo(map);
            
            const marker = L.marker([${currentLocation.latitude}, ${currentLocation.longitude}], {
              draggable: true,
              icon: L.divIcon({
                className: 'custom-marker',
                html: '<div class="custom-marker"></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
              })
            }).addTo(map);

            marker.on('dragend', function(event) {
              const position = marker.getLatLng();
              window.parent.postMessage(JSON.stringify({
                type: 'location',
                latitude: position.lat,
                longitude: position.lng
              }), '*');
            });

            // Adiciona controles de zoom
            L.control.zoom({
              position: 'bottomright'
            }).addTo(map);
          </script>
        </body>
      </html>
    `;
  };

  const handleAddPhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePhotoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPhotos: PhotoType[] = Array.from(files).map(file => ({
        uri: URL.createObjectURL(file),
        name: file.name
      }));
      setPhotos(prev => [...prev, ...newPhotos].slice(0, 3)); // Limita a 3 fotos
    }
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* Título */}
        <Text style={styles.title}>Novo Chamado</Text>

        {/* Campo: Tipo de animal */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tipo de animal</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={animalType}
              onValueChange={(itemValue) => setAnimalType(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione..." value="" />
              <Picker.Item label="Gato" value="gato" />
              <Picker.Item label="Cachorro" value="cachorro" />
              <Picker.Item label="Outro" value="outro" />
            </Picker>
          </View>
        </View>

        {/* Campo: Porte do animal */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Porte</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={animalSize}
              onValueChange={(itemValue) => setAnimalSize(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione..." value="" />
              <Picker.Item label="Pequeno" value="pequeno" />
              <Picker.Item label="Médio" value="medio" />
              <Picker.Item label="Grande" value="grande" />
            </Picker>
          </View>
        </View>

        {/* Campo: Descrição */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descrição, como cor, aparência...</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Digite aqui..."
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Campo: Imagens */}
        <View style={styles.imageSection}>
          <TouchableOpacity 
            style={styles.imageButton}
            onPress={handleAddPhoto}
          >
            <MaterialIcons name="photo-camera" size={40} color="#666" />
            <Text style={styles.imageButtonText}>Adicionar foto</Text>
          </TouchableOpacity>
          
          {photos.map((photo, index) => (
            <View key={index} style={styles.photoContainer}>
              <Image
                source={{ uri: photo.uri }}
                style={styles.photo}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.removePhotoButton}
                onPress={() => handleRemovePhoto(index)}
              >
                <MaterialIcons name="close" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}

          {photos.length < 3 && (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>+</Text>
            </View>
          )}

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            multiple
            onChange={handlePhotoSelect}
          />
        </View>

        {/* Mapa */}
        <TouchableOpacity 
          style={styles.mapContainer}
          onPress={() => setShowMap(true)}
        >
          <Image
            source={{ uri: getMapUrl() }}
            style={styles.map}
            resizeMode="cover"
          />
          <View style={styles.mapOverlay}>
            <Text style={styles.mapOverlayText}>Clique para interagir com o mapa</Text>
          </View>
        </TouchableOpacity>

        {/* Campo: Localização */}
        <TouchableOpacity 
          style={styles.locationButton}
          onPress={getLocation}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#666" />
          ) : (
            <>
              <MaterialIcons name="location-on" size={24} color="#666" />
              <Text style={styles.locationText}>
                {location ? 'Localização obtida' : 'Obter localização atual'}
              </Text>
            </>
          )}
        </TouchableOpacity>

        {/* Exibir coordenadas */}
        {location && (
          <View style={styles.coordinatesContainer}>
            <Text style={styles.coordinatesText}>
              Coordenadas: {formatCoordinates(location)}
            </Text>
          </View>
        )}

        {/* Modal do Mapa */}
        <Modal
          visible={showMap}
          animationType="slide"
          transparent={false}
          onRequestClose={() => setShowMap(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowMap(false)}
              >
                <MaterialIcons name="close" size={24} color="#333" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Selecione a localização</Text>
            </View>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              srcDoc={getInteractiveMapHtml()}
              style={styles.interactiveMap}
              sandbox="allow-scripts allow-same-origin"
            />
          </View>
        </Modal>

        {/* Botão Enviar */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    height: 100,
  },
  imageSection: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  imageButton: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  imageButtonText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  photoContainer: {
    width: 100,
    height: 100,
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  removePhotoButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#ff4444',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 24,
    color: '#ccc',
  },
  mapContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
    height: 200,
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    alignItems: 'center',
  },
  mapOverlayText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    justifyContent: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  coordinatesContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  coordinatesText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    padding: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  interactiveMap: {
    flex: 1,
    border: 'none',
  },
});