import { Button, Text, View } from 'react-native';

export default function FriendsList({ navigation }): JSX.Element {
  return (
    <View>
      <Text>Friends</Text>
      <Button title="IntroRound" onPress={() => navigation.navigate('IntroRound')} />
    </View>
  );
}
