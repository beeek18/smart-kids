import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { Button, Image, Text, TouchableHighlight, View } from 'react-native';
import { ImagesAssets } from '../../assets/imageAssets';
import { useAppSelector } from '../../features/redux/hooks';

export default function Home({ navigation }): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const [imageVolumeToggle, setImageVolumeToggle] = useState(false);

  const [sound, setSound] = useState<Audio.Sound>();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../../assets/mainsound.mp3'));
    await sound.setIsLoopingAsync(true);
    setSound(sound);
    console.log('Playing Sound');
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

  return (
    <View>
      <TouchableHighlight
        style={{ width: 70, height: 70 }}
        activeOpacity={1}
        underlayColor={'white'}
        onPress={() => navigation.navigate('Profile', sound)}
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
    </View>
  );
}
