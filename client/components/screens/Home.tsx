import { Button, View, Text } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useState } from 'react';

export default function Home({ navigation }): JSX.Element {
  const [sound, setSound] = useState(false);
  const onClick = () => {
    setSound((prev) => !prev);
  };
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
