import { Input } from '@rneui/base';
import { Button, Text, View } from 'react-native';

export default function SignUp({ navigation }): JSX.Element {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  );
}
