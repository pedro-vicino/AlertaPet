import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ConfirmationScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Título e mensagem */}
      <Text style={styles.title}>Falta pouco...</Text>
      <Text style={styles.message}>
        Insira apenas seu nome e telefone para contato caso alguma informação adicional seja necessária
      </Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>Confirme sua identidade</Text>

      {/* Campo: Nome */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Campo: Telefone */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone</Text>
        <View style={styles.phoneContainer}>
          <Text style={styles.phonePrefix}>+55 |</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Insira seu número"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* Checkbox (placeholder, sem funcionalidade) */}
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox} />
        <Text style={styles.checkboxText}>Li e concordo com os termos de uso</Text>
      </View>

      {/* Botões */}
      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonSecondaryText}>REVISAR CHAMADO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonPrimaryText}>ENVIAR</Text>
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
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  phonePrefix: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: '#666',
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonSecondaryText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonPrimary: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});