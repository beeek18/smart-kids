import { Button, Text, View } from 'react-native';

export default function Login({ navigation }): JSX.Element {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  );
}
