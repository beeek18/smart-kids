import { useEffect, useState } from 'react';
import { Image, Button, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { editUserImgThunk, logOutThunk } from '../../features/redux/slices/user/userThunk';
import { ImagesAssets } from '../../assets/imageAssets';

export default function Profile({ navigation }): JSX.Element {
  const [input, setInput] = useState('');

  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const updateHandler = (value: string) => {
    dispatch(editUserNameThunk(value));
    setInput('');
  };

  const logOutHandler = () => {
    dispatch(logOutThunk());
  };

  const [imgPath, setImgPath] = useState(user.img);

  const updateImgHandler = (value) => {
    dispatch(editUserImgThunk(value));
    setImgPath(value);
  };
  useEffect(() => {
    setImgPath(user.img);
  }, [user.img]);


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
