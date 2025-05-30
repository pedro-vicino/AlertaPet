import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function AdoptScreen() {
  const handleGoBack = () => {
    router.back();
  };

  // Dados dos animais para adoção
  const animals = [
    {
      id: 1,
      name: 'Thor',
      age: '6 anos',
      size: 'porte grande',
      image: require('../assets/images/dog1.png'), // Você precisa adicionar essas imagens
    },
    {
      id: 2,
      name: 'Bob',
      age: '2 anos',
      size: 'porte médio',
      image: require('../assets/images/dog2.jpg'),
    },
    {
      id: 3,
      name: 'Mia',
      age: '4 meses',
      size: 'porte médio',
      image: require('../assets/images/miau1.png'),
    },
    {
      id: 4,
      name: 'Rex',
      age: '5 meses',
      size: 'porte médio',
      image: require('../assets/images/dog3.png'),
    },
    {
      id: 5,
      name: 'Bela',
      age: '1 ano',
      size: 'porte pequeno',
      image: require('../assets/images/dog4.png'),
    },
    {
      id: 6,
      name: 'Nala',
      age: '3 anos',
      size: 'porte médio',
      image: require('../assets/images/miau2.png'),
    },
    {
      id: 7,
      name: 'Maia',
      age: '7 meses',
      size: 'porte médio',
      image: require('../assets/images/miau3.png'),
    },
    {
      id: 8,
      name: 'Sol',
      age: '4 meses',
      size: 'porte médio',
      image: require('../assets/images/miau4.png'),
    }
  ];

  const handleAnimalPress = (animal: any) => {
    // Apenas a Maia redireciona para detalhes
    if (animal.name === 'Maia') {
      router.push('/animal-details');
    } else {
      console.log('Detalhes disponíveis apenas para Maia');
    }
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

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Quero Adotar!</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
      </View>

      {/* Animals Grid */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {animals.map((animal) => (
            <TouchableOpacity
              key={animal.id}
              style={styles.animalCard}
              onPress={() => handleAnimalPress(animal)}
            >
              <View style={styles.imageContainer}>
                <Image source={animal.image} style={styles.animalImage} />
              </View>
              <View style={styles.animalInfo}>
                <Text style={styles.animalName}>{animal.name}, {animal.age}</Text>
                <Text style={styles.animalSize}>{animal.size}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
  titleContainer: {
    paddingHorizontal: 20,
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  animalCard: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    overflow: 'hidden',
  },
  animalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  animalInfo: {
    padding: 12,
  },
  animalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  animalSize: {
    fontSize: 14,
    color: '#666',
  },
});