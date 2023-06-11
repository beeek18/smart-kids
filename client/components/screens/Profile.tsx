import { useEffect, useState } from 'react';
import { Image, Button, Text, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import {
  checkUserThunk,
  editUserNameThunk,
  logOutThunk,
} from '../../features/redux/slices/user/userThunk';

export default function Profile({ navigation }): JSX.Element {
  const [input, setInput] = useState('');

  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const updateHandler = (value: string) => {
    dispatch(editUserNameThunk(value));
    setInput('');
  };

  const logOutHandler = () => {
    dispatch(logOutThunk());
    sound.stopAsync();
  };

  return (
    <>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity>
          <Image
            style={{ width: 80, height: 80, marginRight: 30, marginLeft: 10 }}
            source={require('../../assets/icons/avatar1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 80, height: 80, marginRight: 30, marginLeft: 10 }}
            source={require('../../assets/icons/avatar2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 80, height: 80, marginRight: 30, marginLeft: 10 }}
            source={require('../../assets/icons/avatar3.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 80, height: 80, marginRight: 30, marginLeft: 10 }}
            source={require('../../assets/icons/avatar4.png')}
          />
        </TouchableOpacity>
      </View>
      <Text>{user?.username}</Text>
      <Text>Как тебя зовут ?</Text>
      <Input
        placeholder="Введите имя"
        onChangeText={(value) => setInput(value)}
        defaultValue={input}
      ></Input>
      <Button onPress={() => updateHandler(input)} title="Сохранить" />
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      <Button
        onPress={() => {
          logOutHandler();
          navigation.navigate('Home');
        }}
        title="Выйти из аккаунта"
      />
    </>
  );
}
