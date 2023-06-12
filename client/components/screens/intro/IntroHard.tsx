import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { ImagesAssets } from '../../../assets/imageAssets';

export default function IntroHard({ navigation }): JSX.Element {
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
    backgroundColor: '#f092e0',
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
    width: 360,
    height: 330,
  },
  submitButton: {
    backgroundColor: '#fff',
    color: 'blue',
    marginTop: 50,
    borderRadius: 20,
  },
});
