import { StackNavigationProp } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImagesAssets } from '../../../assets/imageAssets';
import clickSound from '../../../features/clickSound';


type AutorizationProps = {
  navigation: StackNavigationProp<any, any>;
};

export default function Autorization({ navigation }: AutorizationProps) {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <View>
          <Text style={styles.textAuthorize}>АВТОРИЗАЦИЯ</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.whiteFon}
          onPress={() => {
            clickSound();
            navigation.navigate('SignUp');
          }}
        >
          <Text style={styles.text}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.whiteFon}
          onPress={() => {
            clickSound();
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.text}>Войти</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={ImagesAssets.avatar3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe134',
  },

  innerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: '#ebe134',
    transform: [{ translateY: 50 }],
  },
  textAuthorize: {
    fontFamily: 'Jingle',
    color: 'blue',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 60,
    letterSpacing: 2,
  },
  whiteFonAuto: {
    borderRadius: 10,
    alignItems: 'center',
    width: 250,
    height: 120,
    backgroundColor: 'blue',
    shadowColor: 'white',
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  text: {
    fontFamily: 'Jingle',
    color: 'blue',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 25,
  },
  whiteFon: {
    borderRadius: 10,
    alignItems: 'center',
    width: 250,
    height: 80,
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  image: {
    width: 225,
    height: 225,
    resizeMode: 'contain',
    transform: [{ rotate: '10deg' }],
  },
});
