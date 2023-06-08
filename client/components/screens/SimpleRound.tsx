import { Input } from '@rneui/base';
import { Button, Text, View } from 'react-native';

export default function SimpleRound({ navigation }): JSX.Element {
  return (
    <View>
      <Button onPress={() => navigation.navigate('HardRound')} title="HardRound" />
    </View>
  );
}
