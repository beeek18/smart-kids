import { Button, View } from 'react-native';
import { Avatar } from '@rneui/themed';
import { Text } from 'react-native-elements';

export default function Home({ navigation }): JSX.Element {
  return (
    <View>
      <Avatar size={100} rounded title="😎" />
      <Text h1>🔊</Text>
      <Text h1>🔇</Text>
      <Text h1>ℹ️</Text>
      <Button onPress={() => navigation.navigate('Categories')} title="Начать игру" />
      <Button onPress={() => navigation.navigate('Profile')} title="Profile" />
      <Button onPress={() => navigation.navigate('Info')} title="Info" />
    </View>
  );
}
