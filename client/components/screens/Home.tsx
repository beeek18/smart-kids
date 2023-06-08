import { Button, View, Text } from 'react-native';
import { Avatar } from '@rneui/themed';
import { Text } from 'react-native-elements';
import { useState } from 'react';

export default function Home({ navigation }): JSX.Element {
  const [sound, setSound] = useState(false);
  const onClick = () => {
    setSound((prev) => !prev);
  };
  return (
    <View>
      <Avatar size={100} rounded title="😎" />
      {sound !== true && (
        <Text onPress={() => onClick()} h1>
          🔊
        </Text>
      )}
      {sound === true && (
        <Text onPress={() => onClick()} h1>
          🔇
        </Text>
      )}
      <Button onPress={() => navigation.navigate('Categories')} title="Начать игру" />
      <Button onPress={() => navigation.navigate('Profile')} title="Profile" />
      <Button onPress={() => navigation.navigate('Info')} title="ℹ️" />
    </View>
  );
}
