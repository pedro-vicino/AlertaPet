import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Revisão De Chamados</Text>

      {/* Placeholder para notificações */}
      <View style={styles.notificationPlaceholder}>
        <Text style={styles.placeholderText}>[Aqui será exibido revisões sobre seu chamado!]</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  notificationPlaceholder: {
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
  },
});