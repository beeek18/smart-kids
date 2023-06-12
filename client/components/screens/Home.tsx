import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { Button, Image, Text, TouchableHighlight, View } from 'react-native';
import { ImagesAssets } from '../../assets/imageAssets';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { logOutThunk } from '../../features/redux/slices/user/userThunk';

export default function Home({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();
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
    <View>
      <TouchableHighlight
        style={{ width: 70, height: 70 }}
        activeOpacity={1}
        underlayColor={'white'}
        onPress={() => navigation.navigate('Profile', { sound })}
      >
        <Image style={{ width: 70, height: 70 }} source={ImagesAssets[user.img]} />
      </TouchableHighlight>
      <Text>{user.username}</Text>
      {imageVolumeToggle !== true && (
        <Text
          onPress={() => {
            onClick(), changeVolume(0);
          }}
          style={{ fontSize: 50 }}
        >
          🔊
        </Text>
      )}
      {imageVolumeToggle === true && (
        <Text
          onPress={() => {
            onClick(), changeVolume(1);
          }}
          style={{ fontSize: 50 }}
        >
          🔇
        </Text>
      )}
      <Button onPress={() => navigation.navigate('Categories')} title="Начать игру" />
      <Button onPress={() => navigation.navigate('Info')} title="ℹ" />
      <Button
        onPress={() => {
          logOutHandler();
        }}
        title="Выйти из аккаунта"
      />
    </View>
  );
}
