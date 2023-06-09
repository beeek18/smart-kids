import { Button, View, Text } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { checkUserThunk } from '../../features/redux/slices/user/userThunk';

export default function Home({ navigation }): JSX.Element {
  const [sound, setSound] = useState(false);
  const onClick = () => {
    setSound((prev) => !prev);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserThunk());
  }, []);
  const user = useAppSelector((store) => store.user);
  console.log(user);
  return (
    <View>
      <Avatar size={100} onPress={() => navigation.navigate('Profile')} rounded title="😎" />
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
