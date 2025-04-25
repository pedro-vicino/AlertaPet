import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Notificações</Text>

      {/* Placeholder para notificações */}
      <View style={styles.notificationPlaceholder}>
        <Text style={styles.placeholderText}>[Área para notificações]</Text>
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
    backgroundColor: '#e0e0e0',
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