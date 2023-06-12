import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { ImagesAssets } from '../../../assets/imageAssets';

export default function Categories({ navigation }): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Категории вопросов</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Да/Нет</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Верно/Неверно</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonHardText}>Несколько вариантов</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonHardText}>Заполните пропуски</Text>
          </Pressable>
        </View>
        <Button
          icon={<MaterialIcons name="arrow-forward" size={24} />}
          onPress={() => navigation.navigate('Lobby')}
          buttonStyle={styles.submitButton}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe134',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    width: 300,
    height: 150,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
  },
  buttonHardText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
  },
  submitButton: {
    backgroundColor: '#fff',
    color: 'blue',
    borderRadius: 15,
    marginTop: 20,
  },
});
