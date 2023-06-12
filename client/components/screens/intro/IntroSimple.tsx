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
    width: 200,
    height: 100,
  },
  bannerText: {
    color: '#ebe134',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    marginTop: 50,
    marginLeft: 20,
    width: 350,
    height: 310,
  },
  submitButton: {
    backgroundColor: '#fff',
    color: 'blue',
    marginTop: 50,
    borderRadius: 20,
  },
});
