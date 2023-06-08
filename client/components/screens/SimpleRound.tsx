import { Input } from '@rneui/base';
import { Button, Text, View } from 'react-native';
import SimpleQuestion from '../ui/OneQuestion';

export default function SimpleRound({ navigation }): JSX.Element {
  return (
    <View>
      <SimpleQuestion />
      <Button onPress={() => navigation.navigate('HardRound')} title="HardRound" />
    </View>
  );
}
