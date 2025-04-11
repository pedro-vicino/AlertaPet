import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function NewReportScreen() {
  const [animalType, setAnimalType] = useState('');
  const [animalSize, setAnimalSize] = useState('');
  const [description, setDescription] = useState('');

  // Função para redirecionar ao clicar em "Enviar"
  const handleSubmit = () => {
    // Redireciona para a Tela 3 (confirmação de identidade)
    router.push('/confirmation');
  };

  return (
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

      {/* Campo: Imagens (placeholder) */}
      <View style={styles.imageSection}>
        <TouchableOpacity style={styles.imageButton}>
          <MaterialIcons name="photo-camera" size={40} color="#666" />
        </TouchableOpacity>
        <View style={styles.imagePlaceholder} />
        <View style={styles.imagePlaceholder} />
      </View>

      {/* Campo: Localização (placeholder) */}
      <TouchableOpacity style={styles.locationButton}>
        <MaterialIcons name="location-on" size={24} color="#666" />
        <Text style={styles.locationText}>Adicionar localização</Text>
      </TouchableOpacity>

      {/* Botão Enviar */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>ENVIAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
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
  },
  imageButton: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 10,
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
});