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
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const signUpHandler = () => {
    try {
      dispatch(signUpThunk({ email: '', username: '', password: '' } as SignUpType));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <ThemeProvider theme={theme}>
        <Input
          value={username}
          onChangeText={setUsername}
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
          value={email}
          onChangeText={setEmail}
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
          value={password}
          onChangeText={setPassword}
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
