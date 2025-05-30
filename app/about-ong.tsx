import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function AboutONGScreen() {
  const handleGoBack = () => {
    router.back();
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
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sobre a ONG</Text>
          <Text style={styles.subtitle}>Conheça mais sobre nosso trabalho</Text>
        </View>

        {/* Main Text */}
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            A ONG Lorem Ipsum atua no resgate de cães e gatos abandonados, oferecendo a esses animais cuidados essenciais como atendimento veterinário, alimentação e um ambiente seguro para sua recuperação.
          </Text>
          
          <Text style={styles.mainText}>
            Após esse processo, eles são preparados para adoção e encaminhados a lares responsáveis e cheios de carinho. Além do trabalho direto com os animais, a ONG também desenvolve campanhas de conscientização sobre a importância da adoção responsável e da castração, visando reduzir o número de animais nas ruas.
          </Text>
          
          <Text style={styles.mainText}>
            Com dedicação e amor, a Lorem Ipsum transforma histórias de abandono em recomeços felizes.
          </Text>
        </View>

        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/ong-volunteer.png')} // Você precisa adicionar esta imagem
            style={styles.ongImage}
            resizeMode="cover"
          />
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
  scrollView: {
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
  textContainer: {
    marginBottom: 30,
  },
  mainText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'justify',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  ongImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
  },
});