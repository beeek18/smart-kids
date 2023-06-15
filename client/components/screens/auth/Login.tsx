import { Input, Text } from '@rneui/themed';
import { createRef, useEffect, useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { ImagesAssets } from '../../../assets/imageAssets.ts';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { defaultError, setDefaultError } from '../../../features/redux/slices/error/errorSlice';
import { loginThunk } from '../../../features/redux/slices/user/userThunk';
import { LoginType } from '../../../types/user/UserType';
import clickSound from '../../../features/clickSound';

export default function Autorization() {
  const error = useAppSelector((store) => store.error);

  useEffect(() => {
    if (error.isError) {
      setTimeout(() => {
        dispatch(setDefaultError(defaultError));
      }, 2000);
    }
  }, [error]);

  const [input, setInput] = useState<LoginType>({
    email: '',
    password: '',
  });

  const handleChange = (name: string, value: string): void => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const dispatch = useAppDispatch();

  const inputEmailRef = createRef<HTMLInputElement | any>();
  const inputPassRef = createRef<HTMLInputElement | any>();

  const loginHandler = () => {
    if (input.email.trim() === '' || input.password === '') {
      inputEmailRef.current.shake();
      inputPassRef.current.shake();
      return;
    }
    try {
      dispatch(loginThunk(input));
    } catch (error) {
      console.log(error);
    }
  };

  const handleTap = (): void => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <KeyboardAvoidingView style={styles.view} behavior="padding">
        <View>
          <Text style={styles.textAuthorize}>ВОЙТИ</Text>
        </View>
        <View>
          <Input
            ref={inputEmailRef}
            style={styles.whiteFonInputs}
            value={input.email}
            onChangeText={(value) => handleChange('email', value)}
            placeholder="Электронная почта"
            enablesReturnKeyAutomatically
            textAlign="center"
            focusable
            inputContainerStyle={{
              borderBottomWidth: 0,
              borderRadius: 15,
              backgroundColor: '#F0F0F0',
              width: 250,
            }}
          ></Input>
        </View>
        <View>
          <Input
            ref={inputPassRef}
            style={styles.whiteFonInputs}
            value={input.password}
            onChangeText={(value) => handleChange('password', value)}
            placeholder="Пароль"
            enablesReturnKeyAutomatically
            textAlign="center"
            focusable
            secureTextEntry={true}
            autoCorrect={false}
            spellCheck={false}
            textContentType="none"
            inputContainerStyle={{
              borderBottomWidth: 0,
              borderRadius: 5,
              backgroundColor: '#F0F0F0',
              width: 250,
            }}
          ></Input>
          {error.isError && <Text style={styles.errorText}>{error.text.message}</Text>}
        </View>
        <TouchableOpacity
          onPress={() => {
            loginHandler();
            clickSound();
          }}
          style={styles.whiteFonInputs}
        >
          <Text style={styles.text}>Вход</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={ImagesAssets.avatar3} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebe134',
    gap: 30,
  },
  text: {
    fontFamily: 'Jingle',
    color: 'blue',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 5,
  },
  whiteFonInputs: {
    textAlign: 'center',
    borderRadius: 10,
    alignItems: 'center',
    width: 250,
    height: 60,
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
    color: 'blue',
    fontFamily: 'Jingle',
    fontSize: 30,
  },
  textAuthorize: {
    fontFamily: 'Jingle',
    color: 'blue',
    fontSize: 40,
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 80,
  },
  whiteFonAuto: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: 250,
    height: 120,
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  image: {
    width: 225,
    height: 225,
    resizeMode: 'contain',
    transform: [{ rotate: '10deg' }],
  },
  errorText: {
    fontFamily: 'Jingle',
    color: 'red',
    fontSize: 20,
  },
});
