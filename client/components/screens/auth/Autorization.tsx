import { Button, createTheme } from '@rneui/themed';
import { View } from 'react-native';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

export default function Autorization({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('SignUp')} title="SignUp" />
      <Button onPress={() => navigation.navigate('Login')} title="Login" />
    </View>
  );
}
