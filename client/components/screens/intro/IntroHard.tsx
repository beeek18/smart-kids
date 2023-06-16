import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';

import { ImagesAssets } from '../../../assets/imageAssets.ts';

type IntroHardProps = {
  navigation: StackNavigationProp<any, any>;
};

export default function IntroHard({ navigation }: IntroHardProps): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('SelectRound');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>СЛОЖНЫЙ РАУНД</Text>
        </View>
        <View>
          <Image style={styles.image} source={ImagesAssets.avatar4} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecc3fa',
  },
  banner: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    width: 300,
    height: 150,
    shadowOffset: {
      width: -10,
      height: 10,
    },
    shadowColor: 'blue',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  bannerText: {
    color: 'blue',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Jingle',
  },
  image: {
    marginTop: 50,
    marginLeft: 5,
    width: 360,
    height: 330,
    resizeMode: 'contain',
  },
  submitButton: {
    backgroundColor: '#fff',
    color: 'blue',
    marginTop: 50,
    borderRadius: 20,
  },
});
