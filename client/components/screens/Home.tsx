import { Button, View, Text, Image, TouchableHighlight } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { checkUserThunk, editUserImgThunk } from '../../features/redux/slices/user/userThunk';
import { ImagesAssets } from '../../assets/imageAssets';

export default function Home({ navigation }): JSX.Element {
  const [sound, setSound] = useState(false);

  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const onClick = () => {
    setSound((prev) => !prev);
  };

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
      <Text>{user.username}</Text>
      {sound !== true && (
        <Text onPress={() => onClick()} style={{ fontSize: 50, width: 50 }}>
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
