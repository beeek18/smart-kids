import { Button, Text, View } from 'react-native';

export default function Autorization({ navigation }): JSX.Element {
  return (
    <View>
      <Button onPress={() => navigation.navigate('SignUp')} title="SignUp" />
      <Button onPress={() => navigation.navigate('Login')} title="Login" />
    </View>
  );
}
