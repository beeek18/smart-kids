import { Button, Text, View } from 'react-native';

export default function Info({ navigation }): JSX.Element {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  );
}
