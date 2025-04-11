import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  // Função para redirecionar para a Tela 2
  const handleNavigation = () => {
    router.push('/new-report'); // Redireciona para a Tela 2
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Cabeçalho */}
      <Text style={styles.logoText}>AlertaPet</Text>
      <Text style={styles.welcomeText}>Bem-vindo, convidado!</Text>

      {/* Botões */}
      <View style={styles.buttonGrid}>
        {/* Linha superior */}
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <MaterialIcons name="add-circle-outline" size={40} color="#FF6347" />
          <Text style={styles.buttonText}>Novo Chamado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <MaterialIcons name="favorite" size={40} color="#FFD700" />
          <Text style={styles.buttonText}>Quero Adotar</Text>
        </TouchableOpacity>

        {/* Linha inferior */}
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <MaterialIcons name="pets" size={40} color="#A9A9A9" />
          <Text style={styles.buttonText}>Animais Resgatados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <MaterialIcons name="info" size={40} color="#9370DB" />
          <Text style={styles.buttonText}>Sobre a ONG</Text>
        </TouchableOpacity>
      </View>

      {/* Seção de texto e imagem */}
      <View style={styles.footerSection}>
        <Text style={styles.footerTitle}>Faça a diferença hoje</Text>
        <Text style={styles.footerText}>Ajude uma vida, salve um animalzinho</Text>
        {/* Imagem - substitua pelo caminho real da imagem */}
        <Image
          source={require('../assets/images/cachorro.png')} // Substitua pelo caminho real
          style={styles.footerImage}
          resizeMode="cover"
        />
      </View>
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
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  footerSection: {
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  footerImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});