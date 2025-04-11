import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function InitialScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Função para lidar com o clique nos botões "Entrar" e "Criar Conta"
  const handleNavigation = () => {
    // Como a autenticação não precisa funcionar, qualquer valor é considerado "true"
    router.push('/home'); // Redireciona para a próxima tela
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Logo */}
      <Text style={styles.logoText}>AlertaPet</Text>

      {/* Campo de Email */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="exemplo@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Campo de Senha */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <MaterialIcons
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color="#666"
            style={styles.icon}
          />
        </Pressable>
      </View>

      {/* Link "Esqueci minha senha" */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>ESQUECI MINHA SENHA</Text>
      </TouchableOpacity>

      {/* Botões */}
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={handleNavigation}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={handleNavigation}
      >
        <Text style={styles.buttonText}>CRIAR CONTA</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou</Text>

      <TouchableOpacity
        style={[styles.button, styles.guestButton]}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.buttonText}>CONVIDADO</Text>
      </TouchableOpacity>

      {/* Rodapé com ícones de redes sociais */}
      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>ou entre com</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <FontAwesome name="google" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="facebook" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="instagram" size={24} color="#333" />
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  guestButton: {
    backgroundColor: '#4DA8FF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  socialContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  socialText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 20,
  },
});