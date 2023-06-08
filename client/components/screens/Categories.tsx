import { Button, Text, View } from 'react-native';

export default function Categories({ navigation }): JSX.Element {
  return (
    <View>
      <Text>CATEGORIES</Text>
      <Button onPress={() => navigation.navigate('FriendsList')} title="FriendsList" />
    </View>
  );
}
