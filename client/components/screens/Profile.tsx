import { useState } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import { ImagesAssets } from '../../assets/imageAssets';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { editUserImgThunk, editUserNameThunk } from '../../features/redux/slices/user/userThunk';

export default function Profile({ navigation }): JSX.Element {
  const [input, setInput] = useState('');

  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const updateHandler = (value: string) => {
    dispatch(editUserNameThunk(value));
    setInput('');
  };

  const updateImgHandler = (value) => {
    dispatch(editUserImgThunk(value));
  };

  return (
    <>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity onPress={() => updateImgHandler('avatar1')}>
          <Image
            style={{ width: 80, height: 80, marginRight: 10, marginLeft: 10 }}
            source={ImagesAssets.avatar1}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateImgHandler('avatar2')}>
          <Image
            style={{ width: 80, height: 80, marginRight: 10, marginLeft: 10 }}
            source={ImagesAssets.avatar2}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateImgHandler('avatar3')}>
          <Image
            style={{ width: 80, height: 80, marginRight: 10, marginLeft: 10 }}
            source={ImagesAssets.avatar3}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateImgHandler('avatar4')}>
          <Image
            style={{ width: 80, height: 80, marginRight: 10, marginLeft: 10 }}
            source={ImagesAssets.avatar4}
          />
        </TouchableOpacity>
      </View>
      <Text>{user.username}</Text>
      <Text>Как тебя зовут ?</Text>
      <Input
        placeholder="Введите имя"
        onChangeText={(value) => setInput(value)}
        defaultValue={input}
      ></Input>
      <Button onPress={() => updateHandler(input)} title="Сохранить" />
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </>
  );
}
