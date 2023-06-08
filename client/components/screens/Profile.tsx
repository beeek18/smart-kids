import React, { useState } from 'react';
import { Image, Button, Text, View } from 'react-native';
import { Input } from 'react-native-elements';

export default function Profile({ navigation }): JSX.Element {
  const [name, setName] = useState('');
  const handleSave = () => {
    console.log('save');
  };

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
      <Text>{name}</Text>
      <Text>Как тебя зовут ?</Text>
      <Input placeholder="Введите имя" onChangeText={setName}></Input>
      <Button onPress={handleSave} title="Сохранить" />
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </>
  );
}
