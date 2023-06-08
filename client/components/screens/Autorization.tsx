import React, { useState } from 'react';
import { ThemeProvider, Button, createTheme, Input, Text } from '@rneui/themed';
import { useRoute } from '@react-navigation/native';
import { color } from '@rneui/base';
import { useAppDispatch } from '../../features/redux/hooks';
import { loginThunk } from '../../features/redux/slices/user/userThunk';
import { View } from 'react-native';
import { LoginType } from '../../types/user/UserType';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

export default function Autorization({ navigation }) {
  // const [inputValue, setInputValue] = useState({ email: '', username: '', password: '' });
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    try {
      dispatch(loginThunk({ email, password } as LoginType));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text h1 h1Style={{ textAlign: 'center', color: 'blue' }}>
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
      </ThemeProvider>
      <Button onPress={() => navigation.navigate('SignUp')} title="SignUp" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     color: 'yellow',
//   },
// });
