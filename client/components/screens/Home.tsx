import { Button, View, Text } from 'react-native';
import { Avatar } from '@rneui/themed';

export default function Home({ navigation }): JSX.Element {
  return (
    <View>
      <Avatar size={100} rounded title="😎" />
      <Text>🔊</Text>
      <Text>🔇</Text>
      <Text>ℹ️</Text>
      <Button onPress={() => navigation.navigate('Categories')} title="Начать игру" />
      <Button onPress={() => navigation.navigate('Profile')} title="Profile" />
      <Button onPress={() => navigation.navigate('Info')} title="Info" />
    </View>
  );
}
