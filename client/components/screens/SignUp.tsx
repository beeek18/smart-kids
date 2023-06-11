import { Button, Input } from '@rneui/base';
import { ThemeProvider, createTheme } from '@rneui/themed';
import React, { useState } from 'react';
import { useAppDispatch } from '../../features/redux/hooks';
import { signUpThunk } from '../../features/redux/slices/user/userThunk';
import { SignUpType } from '../../types/user/UserType';
import { View } from 'react-native';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});
export default function SignUp({ navigation }) {
  const [input, setInput] = useState<SignUpType>({
    username: '',
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

  const signUpHandler = (): void => {
    try {
      dispatch(signUpThunk(input));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <ThemeProvider theme={theme}>
        <Input
          value={input.username}
          onChangeText={(value) => handleChange('username', value)}
          placeholder="Как тебя зовут?"
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
          textContentType="password"
          inputContainerStyle={{
            borderBottomWidth: 0,
            borderRadius: 5,
            backgroundColor: '#F0F0F0',
            marginBottom: 10,
          }}
        ></Input>
        <Button onPress={signUpHandler}>Зарегистрироваться</Button>
        <Button onPress={() => navigation.navigate('Home')} title="Home" />
      </ThemeProvider>
    </View>
  );
}
