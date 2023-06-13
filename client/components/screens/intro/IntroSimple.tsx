import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { ImagesAssets } from '../../../assets/imageAssets';

export default function IntroSimple({ navigation }): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('ChoiceRound');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>ПРОСТОЙ РАУНД</Text>
        </View>
        <View>
          <Image style={styles.image} source={ImagesAssets.avatar1} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    width: 300,
    height: 150,
    shadowOffset: {
      width: -10,
      height: 10,
    },
    shadowColor: '#ebe134',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  bannerText: {
    color: '#ebe134',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Jingle',
  },
  image: {
    marginTop: 50,
    width: 350,
    height: 310,
    resizeMode: 'contain',
  },
  submitButton: {
    backgroundColor: '#fff',
    color: 'blue',
    marginTop: 50,
    borderRadius: 20,
  },
});
