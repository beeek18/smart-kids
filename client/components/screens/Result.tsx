import { Button, Text, View } from 'react-native';

export default function Result({ navigation }): JSX.Element {
  return (
    <View>
      <Text>Result</Text>
      <Button onPress={() => navigation.navigate('FriendsList')} title="FriendsList" />
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  );
}
