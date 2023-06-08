import { Button, Text, View } from 'react-native';

export default function SignUp({ navigation }): JSX.Element {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Categories')} title="Categories" />
      <Button onPress={() => navigation.navigate('Profile')} title="Profile" />
      <Button onPress={() => navigation.navigate('Info')} title="Info" />
    </View>
  );
}
