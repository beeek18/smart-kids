import { Button, Input, Text, ThemeProvider, createTheme } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppDispatch } from '../../../features/redux/hooks';
import { loginThunk } from '../../../features/redux/slices/user/userThunk';
import { LoginType } from '../../../types/user/UserType';

export default function Autorization({ navigation }) {
  const [input, setInput] = useState<LoginType>({
    email: '',
    password: '',
  });

  const handleChange = (name, value): void => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    try {
      dispatch(loginThunk(input));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text h1 h1Style={{ textAlign: 'center', color: 'blue' }}>
        Авторизация
      </Text>
      <Input
        value={input.email}
        onChangeText={(value) => handleChange('email', value)}
        placeholder="Электронная почта"
        enablesReturnKeyAutomatically
        textAlign="center"
        focusable
        inputContainerStyle={{
          borderBottomWidth: 0,
          borderRadius: 5,
          backgroundColor: '#F0F0F0',
          marginBottom: 10,
        }}
      ></Input>
      <Input
        value={input.password}
        onChangeText={(value) => handleChange('password', value)}
        placeholder="Пароль"
        enablesReturnKeyAutomatically
        textAlign="center"
        focusable
        autoCorrect={false}
        spellCheck={false}
        textContentType="none"
        inputContainerStyle={{
          borderBottomWidth: 0,
          borderRadius: 5,
          backgroundColor: '#F0F0F0',
          marginBottom: 10,
        }}
      ></Input>
      <Button onPress={loginHandler}>Войти</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebe134',
  },
  text: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
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
  },
  textAuthorize: {
    color: 'blue',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 40,
    letterSpacing: 2,
  },
  whiteFonAuto: {
    marginBottom: 70,
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
    marginRight: 100,
    resizeMode: 'contain',
    transform: [{ rotate: '10deg' }],
  },
});
