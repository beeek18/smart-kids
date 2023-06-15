import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button, Input } from 'react-native-elements';

import { ImagesAssets } from '../../assets/imageAssets.ts';
import clickSound from '../../features/clickSound';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { editUserImgThunk, editUserNameThunk } from '../../features/redux/slices/user/userThunk';

type ProfileProps = {
  navigation: StackNavigationProp<any, any>;
};

export default function Profile({ navigation }: ProfileProps): JSX.Element {
  const [input, setInput] = useState('');
  const [selectedImg, setSelectedImg] = useState('');
  const user = useAppSelector((store) => store.user);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useAppDispatch();

  const updateHandler = (value: string) => {
    dispatch(editUserNameThunk(value));
    setInput('');
    setEditMode(false); // Скрыть инпут после сохранения
  };
  const updateImgHandler = (value) => {
    dispatch(editUserImgThunk(value));
    setSelectedImg(value);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.bannerChoiceAvatar}>
          <Text style={styles.bannerChoiceAvatarText}>Выбери аватар</Text>
        </View>
        <View style={styles.avatar}>
          <TouchableOpacity
            onPress={() => {
              clickSound();
              updateImgHandler('avatar1');
            }}
          >
            <Animatable.View animation={selectedImg === 'avatar1' ? 'bounce' : ''}>
              <Image style={styles.imageStyle} source={ImagesAssets.avatar1} />
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              clickSound();
              updateImgHandler('avatar2');
            }}
          >
            <Animatable.View animation={selectedImg === 'avatar2' ? 'bounce' : ''}>
              <Image style={styles.imageStyle} source={ImagesAssets.avatar2} />
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              clickSound();
              updateImgHandler('avatar3');
            }}
          >
            <Animatable.View animation={selectedImg === 'avatar3' ? 'bounce' : ''}>
              <Image style={styles.imageStyle} source={ImagesAssets.avatar3} />
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              clickSound();
              updateImgHandler('avatar4');
            }}
          >
            <Animatable.View animation={selectedImg === 'avatar4' ? 'bounce' : ''}>
              <Image style={styles.imageStyle} source={ImagesAssets.avatar4} />
            </Animatable.View>
          </TouchableOpacity>
        </View>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Как тебя зовут ?</Text>
          <Text style={styles.bannerName}>{user.username}</Text>
        </View>
        {!editMode && (
          <TouchableOpacity
            onPress={() => {
              clickSound();
              setEditMode(true);
            }}
            style={styles.bannerInput}
          >
            <Text style={styles.bannerTextSave}>Изменить имя</Text>
          </TouchableOpacity>
        )}
        {editMode && (
          <Input
            placeholder="Введите имя"
            style={styles.bannerInput}
            onChangeText={(value) => setInput(value)}
            defaultValue={input}
            inputContainerStyle={{
              width: 325,
              marginLeft: 25,
              borderBottomWidth: 0,
            }}
            inputStyle={{ textAlign: 'center' }}
          />
        )}
        {editMode && (
          <TouchableOpacity
            onPress={() => {
              clickSound();
              updateHandler(input);
            }}
            style={styles.bannerSave}
          >
            <Text style={styles.bannerTextSave}>Сохранить</Text>
          </TouchableOpacity>
        )}
        <Button
          icon={<MaterialIcons name="keyboard-backspace" size={40} color={'blue'} />}
          onPress={() => {
            clickSound();
            navigation.navigate('Home');
          }}
          buttonStyle={styles.submitButton}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe134',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  bannerText: {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    fontFamily: 'Jingle',
    marginTop: 5,
  },
  bannerTextSave: {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    fontFamily: 'Jingle',
  },
  banner: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    marginTop: 30,
    width: 325,
    height: 140,
    shadowColor: 'blue',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },
  submitButton: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowColor: 'blue',
    shadowOpacity: 3,
    shadowRadius: 1,
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerName: {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    fontFamily: 'Jingle',
    marginTop: 5,
  },
  bannerInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    marginTop: 10,
    width: 325,
    height: 80,
    shadowColor: 'blue',
    color: 'blue',
    fontFamily: 'Jingle',
    fontSize: 30,
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },
  bannerSave: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    marginTop: -40,
    width: 325,
    height: 80,
    shadowColor: 'blue',
    color: 'blue',
    fontFamily: 'Jingle',
    fontSize: 30,
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  bannerChoiceAvatar: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    marginTop: 50,
    width: 325,
    height: 80,
    shadowColor: 'blue',
    color: 'blue',
    fontFamily: 'Jingle',
    fontSize: 30,
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },
  bannerChoiceAvatarText: {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    fontFamily: 'Jingle',
  },
});
