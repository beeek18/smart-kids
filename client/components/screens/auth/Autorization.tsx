import { Button, createTheme } from '@rneui/themed';
import { View, StyleSheet, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { ImagesAssets } from '../../../assets/imageAssets';

export default function Autorization({ navigation }) {
  return (
    // <View style={styles.view}>
    <View style={styles.innerView}>
      <View style={styles.whiteFonAuto}>
        <Text style={styles.textAuthorize}>АВТОРИЗАЦИЯ</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.whiteFon}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.text}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.whiteFon}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.whiteFon}>
        <Text style={styles.text}>gogel</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={ImagesAssets.avatar3} />
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  // view: {
  //   marginTop: 450,
  //   backgroundColor: '#ebe134',
  // },
  innerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: '#ebe134',
  },
  textAuthorize: {
    color: 'blue',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 40,
    letterSpacing: 2,
  },
  whiteFonAuto: {
    borderRadius: 10,
    alignItems: 'center',
    width: 250,
    height: 120,
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  text: {
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
    marginRight: 100,
    resizeMode: 'contain',
    transform: [{ rotate: '10deg' }],
  },
});
