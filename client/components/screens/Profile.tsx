import { Image, Button, Text, View } from 'react-native';
import { Input } from 'react-native-elements';

export default function Profile({ navigation }): JSX.Element {
  return (
    <>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Image
          style={{ width: 80, height: 80, marginRight: 30, marginLeft: 10 }}
          source={require('../../assets/icons/avatar1.png')}
        />
        <Image
          style={{ width: 80, height: 80, marginRight: 30 }}
          source={require('../../assets/icons/avatar2.png')}
        />
        <Image
          style={{ width: 80, height: 80, marginRight: 30 }}
          source={require('../../assets/icons/avatar3.png')}
        />
        <Image
          style={{ width: 80, height: 80 }}
          source={require('../../assets/icons/avatar4.png')}
        />
      </View>
      <Text>Alena</Text>
      <Text>Как тебя зовут ?</Text>
      <Input placeholder="Введите имя"></Input>
      <Button title="Сохранить" />
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </>
  );
}
