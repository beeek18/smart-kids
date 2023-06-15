import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import { ImagesAssets } from '../../assets/imageAssets.ts';
import clickSound from '../../features/clickSound';

type InfoProps = {
  navigation: StackNavigationProp<any, any>;
};

export default function Info({ navigation }: InfoProps): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>ИНСТРУКЦИЯ</Text>
        </View>
        <View style={styles.bannerRules}>
          <Text style={styles.rules}>
            Играть можно компанией до 7 играков. На ответ дается 15 секунд, в последнем раунде 20
            секунд. В игре 4 раунда.
          </Text>
        </View>
        <View style={styles.bannerRules}>
          <Text style={styles.rules}>
            У каждого раунда свой уровень сложности. На каждом вопросе есть только один правильный
            ответ.
          </Text>
        </View>
        <View style={styles.bannerRules1}>
          <Text style={styles.rules}>
            За правильный ответ начисляется 1 балл, за неправильный - 0. За все правильные ответы Вы
            получаете 10 корон, которые можно обменять на призы.
          </Text>
        </View>
        <Button
          icon={<MaterialIcons name="keyboard-backspace" size={40} color={'blue'} />}
          onPress={() => {
            clickSound();
            navigation.navigate('Home');
          }}
          buttonStyle={styles.submitButton}
        />
      </View>
      <Image style={styles.img} source={ImagesAssets.avatar5} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe134',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  img: {
    position: 'absolute',
    width: 190,
    marginTop: 65,
    marginLeft: 230,
    height: 100,
    transform: [{ rotate: '380deg' }],
    resizeMode: 'contain',
    zIndex: 1,
  },
  bannerRules: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    width: 325,
    height: 100,
    shadowColor: 'blue',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 1,
    zIndex: 0,
  },
  bannerRules1: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    width: 325,
    height: 130,
    shadowColor: 'blue',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 1,
    zIndex: 0,
  },
  bannerText: {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    fontFamily: 'Jingle',
    marginTop: 40,
  },
  banner: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    marginTop: 60,
    width: 325,
    height: 150,
    shadowColor: 'blue',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },
  rules: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
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
