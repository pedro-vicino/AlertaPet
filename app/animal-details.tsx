import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function AnimalDetailsScreen() {
  const handleGoBack = () => {
    router.back();
  };

  const handleNext = () => {
    // Funcionalidade a ser implementada
    console.log('Próximo - funcionalidade em desenvolvimento');
  };

  const handleAdopt = () => {
    // Funcionalidade a ser implementada
    console.log('Quero Adotar - funcionalidade em desenvolvimento');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="menu" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sobre o Animal</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
        </View>

        {/* Animal Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/miau3.png')} // Imagem da Maia
            style={styles.animalImage}
            resizeMode="cover"
          />
        </View>

        {/* Animal Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.animalName}>Maia, 7 meses</Text>
          <Text style={styles.rescueDate}>Resgate: 03/02/2025</Text>
          <Text style={styles.colorInfo}>Cor: tricolor (branco, preto e laranja)</Text>
          <Text style={styles.personalityInfo}>Amável, brincalhona e dorminhoca</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>PRÓXIMO</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.adoptButton} onPress={handleAdopt}>
            <Text style={styles.adoptButtonText}>QUERO ADOTAR!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  backButton: {
    padding: 5,
  },
  menuButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  animalImage: {
    width: '90%',
    height: 300,
    borderRadius: 15,
  },
  infoContainer: {
    marginBottom: 40,
  },
  animalName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  rescueDate: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  colorInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  personalityInfo: {
    fontSize: 16,
    color: '#666',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  adoptButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  adoptButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});