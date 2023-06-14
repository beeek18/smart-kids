import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { ImagesAssets } from '../../../assets/imageAssets';
import { useAppSelector } from '../../../features/redux/hooks';

export default function Categories({ navigation }): JSX.Element {
  const players = useAppSelector((store) => store.game.allPlayers);

  const handleToLobby = () => {
    if (players.length <= 7) {
      navigation.navigate('Lobby');
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>КАТЕГОРИИ ВОПРОСОВ</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.smiles1}>
            <Image style={styles.image} source={ImagesAssets.avatar2} />
            <Image style={styles.image} source={ImagesAssets.avatar3} />
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Да/Нет</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Верно/Неверно</Text>
          </Pressable>
          <View style={styles.smiles2}>
            <Image style={styles.image} source={ImagesAssets.avatar1} />
            <Image style={styles.image} source={ImagesAssets.avatar4} />
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonHardText}>Несколько вариантов</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonHardText}>Заполните пропуски</Text>
          </Pressable>
        </View>
        <Button
          icon={<MaterialIcons name="arrow-forward" color={'blue'} size={24} />}
          onPress={handleToLobby}
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
    width: 300,
    height: 150,
    elevation: 2,
    shadowOffset: {
      width: -10,
      height: 10,
    },
    shadowColor: 'blue',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  bannerText: {
    marginTop: 25,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    fontFamily: 'Jingle',
  },
  image: {
    marginTop: 30,
    marginLeft: 20,
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  smiles1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 110,
  },
  smiles2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 110,
  },
  buttonContainer: {
    display: 'flex',
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
    elevation: 2,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowOffset: {
      width: -7,
      height: 7,
    },
    shadowColor: 'blue',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
    fontFamily: 'Jingle',
  },
  buttonHardText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
    fontFamily: 'Jingle',
  },
  submitButton: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowColor: 'blue',
    shadowOpacity: 3,
    shadowRadius: 1,
  },
});
