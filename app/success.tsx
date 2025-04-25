import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function SuccessScreen() {
  // Funções de navegação
  const handleGoHome = () => {
    router.push('/home'); // Redireciona para a Tela 1 (Home)
  };

  const handleNewReport = () => {
    router.push('/new-report'); // Redireciona para a Tela 2 (Novo Chamado)
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Título */}
      <Text style={styles.title}>Eba!</Text>

{/* Imagem */}
<Image
        source={require('../assets/images/dognacaixa.png')} // Ajuste o nome do arquivo conforme necessário
        style={styles.imagePlaceholder}
        resizeMode="contain"
      />

      {/* Mensagem */}
      <Text style={styles.message}>Mais um animalzinho pronto para ser resgatado!</Text>

      {/* Botões */}
      <TouchableOpacity style={styles.button} onPress={handleGoHome}>
        <Text style={styles.buttonText}>PÁGINA INICIAL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={handleNewReport}>
        <Text style={[styles.buttonText, styles.buttonSecondaryText]}>
          NOVO CHAMADO
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
  },
  imagePlaceholderText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  buttonSecondaryText: {
    color: '#007AFF',
  },
});