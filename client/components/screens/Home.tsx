import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { ImagesAssets } from '../../assets/imageAssets';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { checkUserThunk, logOutThunk } from '../../features/redux/slices/user/userThunk';
import { socketInit } from '../../features/ws/wsActions';

export default function Home({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(socketInit());
    dispatch(checkUserThunk());
  }, []);

  const user = useAppSelector((store) => store.user);
  const [imageVolumeToggle, setImageVolumeToggle] = useState(false);

  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../../assets/mainsound.mp3'));
    await sound.setIsLoopingAsync(true);
    console.log('Playing Sound');
    setSound(sound);
    await sound.playAsync();
  }

  const changeVolume = async (volume: number) => {
    try {
      if (sound) {
        await sound.setVolumeAsync(volume);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    playSound();
    return () => {
      if (sound) {
        sound.stopAsync();
      }
    };
  }, []);

  const onClick = () => {
    setImageVolumeToggle((prev) => !prev);
  };
  const logOutHandler = async () => {
    if (sound) {
      sound.stopAsync();
    }
    dispatch(logOutThunk());
  };

  return (
    <>
      <View style={styles.containerAll}>
        <View style={styles.info}>
          <Icon
            color="blue"
            onPress={logOutHandler}
            style={styles.buttonLogout}
            size={55}
            name="logout"
          />
          <Icon
            onPress={() => navigation.navigate('Info')}
            style={styles.buttonInfo}
            name="info-outline"
            size={55}
            color="blue"
          />
          {imageVolumeToggle !== true && (
            <Icon
              onPress={() => {
                onClick(), changeVolume(0);
              }}
              color="blue"
              size={50}
              name="audiotrack"
            />
          )}
          {imageVolumeToggle === true && (
            <Icon
              onPress={() => {
                onClick(), changeVolume(1);
              }}
              size={50}
              color="blue"
              name="music-off"
            />
          )}
        </View>
      </View>
      <View style={styles.container}>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={'white'}
          onPress={() => navigation.navigate('Profile', { sound })}
        >
          <Image
            style={{ width: 200, height: 190, resizeMode: 'contain', backgroundColor: '#ebe134' }}
            source={ImagesAssets[user.img]}
          />
        </TouchableHighlight>
        <Text style={styles.nameText}>{user.username}</Text>
        <View>
          <TouchableOpacity style={styles.banner} onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.bannerText}>Играть</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: '#ebe134',
  },
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
    height: 70,
    shadowColor: 'blue',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },
  nameText: {
    fontSize: 45,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    marginBottom: 75,
    fontFamily: 'Jingle',
  },
  button: {
    backgroundColor: 'blue',
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
  bannerText: {
    fontSize: 40,
    fontWeight: 'bold',
    // letterSpacing: 0.25,
    color: 'blue',
    textAlign: 'center',
    marginTop: -7,
    fontFamily: 'Jingle',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebe134',
    padding: 10,
    marginTop: 70,
  },
  buttonInfo: {
    fontSize: 45,
    marginRight: 20,
  },
  buttonLogout: {
    marginRight: 190,
  },
});
