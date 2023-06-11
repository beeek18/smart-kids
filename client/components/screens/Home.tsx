import { Button, View, Text, Image, TouchableHighlight } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { checkUserThunk } from '../../features/redux/slices/user/userThunk';
import { ImagesAssets } from '../../assets/imageAssets';

export default function Home({ navigation }): JSX.Element {
  const [sound, setSound] = useState(false);

  const onClick = () => {
    setSound((prev) => !prev);
  };

  const user = useAppSelector((state) => state.user);

  return (
    <View>
      <TouchableHighlight
        style={{ width: 70, height: 70 }}
        activeOpacity={1}
        underlayColor={'white'}
        onPress={() => navigation.navigate('Profile')}
      >
        <Image style={{ width: 70, height: 70 }} source={ImagesAssets[user.img]} />
      </TouchableHighlight>
      <Text>Алена</Text>
      {sound !== true && (
        <Text onPress={() => onClick()} style={{ fontSize: 50 }}>
          🔊
        </Text>
      )}
      {sound === true && (
        <Text onPress={() => onClick()} style={{ fontSize: 50 }}>
          🔇
        </Text>
      )}
      <Button onPress={() => navigation.navigate('Categories')} title="Начать игру" />
      <Button onPress={() => navigation.navigate('Info')} title="ℹ" />
    </View>
  );
}
