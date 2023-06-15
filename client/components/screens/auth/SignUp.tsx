import { Input } from '@rneui/themed';
import { createRef, useEffect, useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { ImagesAssets } from '../../../assets/imageAssets.ts';
import clickSound from '../../../features/clickSound';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { defaultError, setDefaultError } from '../../../features/redux/slices/error/errorSlice';
import { signUpThunk } from '../../../features/redux/slices/user/userThunk';
import { SignUpType } from '../../../types/user/UserType';

export default function SignUp() {
  const error = useAppSelector((store) => store.error);
  const [input, setInput] = useState<SignUpType>({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (error.isError) {
      setTimeout(() => {
        dispatch(setDefaultError(defaultError));
      }, 2000);
    }
  }, [error]);

  const inputEmailRef = createRef<HTMLInputElement | any>();
  const inputPassRef = createRef<HTMLInputElement | any>();
  const inputNameRef = createRef<HTMLInputElement | any>();

  const handleChange = (name: string, value: string): void => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useAppDispatch();

  const signUpHandler = (): void => {
    if (input.email.trim() === '' || input.password === '' || input.username === '') {
      inputEmailRef.current.shake();
      inputPassRef.current.shake();
      inputNameRef.current.shake();
      return;
    }
    try {
      dispatch(signUpThunk(input));
    } catch (error) {
      console.log(error);
    }
  };
  const handleTap = (): void => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback style={styles.outerView} onPress={handleTap}>
        <View style={styles.container}>
          <View style={styles.background}></View>
          <KeyboardAvoidingView style={styles.view} behavior="padding">
            <View style={styles.content}>
              <View style={styles.whiteFonAuto}>
                <Text style={styles.textAuthorize}>РЕГИСТРАЦИЯ</Text>
              </View>
              <View>
                <Input
                  ref={inputNameRef}
                  cursorColor={'blue'}
                  style={styles.whiteFon}
                  value={input.username}
                  onChangeText={(value) => handleChange('username', value)}
                  placeholder="Как тебя зовут?"
                  enablesReturnKeyAutomatically
                  textAlign="center"
                  focusable
                  inputContainerStyle={{
                    width: 240,
                    borderBottomWidth: 0,
                    borderRadius: 15,
                    backgroundColor: '#F0F0F0',
                  }}
                ></Input>
                <Input
                  ref={inputEmailRef}
                  style={styles.whiteFon}
                  value={input.email}
                  onChangeText={(value) => handleChange('email', value)}
                  placeholder="Электронная почта"
                  enablesReturnKeyAutomatically
                  textAlign="center"
                  inputContainerStyle={{
                    width: 240,
                    borderBottomWidth: 0,
                    borderRadius: 15,
                    backgroundColor: 'white',
                  }}
                ></Input>
                <Input
                  ref={inputPassRef}
                  style={styles.whiteFon}
                  value={input.password}
                  onChangeText={(value) => handleChange('password', value)}
                  placeholder="Пароль"
                  enablesReturnKeyAutomatically
                  textAlign="center"
                  secureTextEntry={true}
                  textContentType="password"
                  inputContainerStyle={{
                    width: 240,
                    borderBottomWidth: 0,
                    borderRadius: 15,
                    backgroundColor: '#F0F0F0',
                  }}
                ></Input>
                {error.isError && <Text style={styles.errorText}>{error.text.message}</Text>}
              </View>
              <TouchableOpacity
                onPress={() => {
                  signUpHandler();
                  clickSound();
                }}
                style={[styles.whiteFon, { marginTop: 30 }]}
              >
                <Text style={styles.text}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Image style={styles.image} source={ImagesAssets.avatar3} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ebe134',
  },
  outerView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    marginLeft: 70,
    transform: [{ translateY: 40 }],
  },
  view: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'Jingle',
  },
  whiteFon: {
    borderRadius: 10,
    alignItems: 'center',
    width: 260,
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
    fontSize: 42,
    textAlign: 'center',
    marginTop: 40,
    letterSpacing: 2,
  },
  whiteFonAuto: {
    marginBottom: 70,
    borderRadius: 10,
    alignItems: 'center',
    width: 275,
    height: 120,
  },
  image: {
    width: 225,
    height: 225,
    marginRight: 100,
    resizeMode: 'contain',
    transform: [{ rotate: '10deg' }],
    position: 'relative',
  },
  errorText: {
    fontFamily: 'Jingle',
    color: 'red',
    fontSize: 20,
  },
});
