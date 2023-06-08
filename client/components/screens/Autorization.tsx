import React, { useState } from 'react';
import { ThemeProvider, Button, createTheme, Input, Text } from '@rneui/themed';
import { useRoute } from '@react-navigation/native';
import { color } from '@rneui/base';
import { useAppDispatch } from '../../features/redux/hooks';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

export default function Autorization() {
  // const [inputValue, setInputValue] = useState({ email: '', username: '', password: '' });
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // const dispatch = useAppDispatch();

  return (
    <>
      <Text h1 h1Style={{ color: 'blue' }}>
        Авторизация
      </Text>
      <ThemeProvider theme={theme}>
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
        <Button>Войти</Button>
      </ThemeProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     color: 'yellow',
//   },
// });
