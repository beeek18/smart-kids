import { Button, Text, View } from 'react-native';
import ChoiceButton from '../ui/Buttons.tsx/ChoiceButton';

export default function Categories({ navigation }): JSX.Element {
  return (
    <>
      <View>
        <Text>CATEGORIES</Text>
        <Button onPress={() => navigation.navigate('FriendsList')} title="FriendsList" />
      </View>
      <View>
        <ChoiceButton />
      </View>
    </>
  );
}
