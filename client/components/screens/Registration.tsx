import { Button, Input } from '@rneui/base';
import { ThemeProvider, createTheme } from '@rneui/themed';
import React, { useState } from 'react';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});
export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
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
      <Button>Зарегистрироваться</Button>
    </ThemeProvider>
  );
}
