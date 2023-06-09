import { useEffect, useState } from 'react';
import { Image, Button, Text, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { checkUserThunk, logOutThunk } from '../../features/redux/slices/user/userThunk';
import { useEffect } from 'react';

export default function Profile({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const logOutHandler = () => {
    dispatch(logOutThunk());
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
      <Text>{user.username}</Text>
      <Text>Как тебя зовут ?</Text>
      <Input placeholder="Введите имя"></Input>
      <Button title="Сохранить" />
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
