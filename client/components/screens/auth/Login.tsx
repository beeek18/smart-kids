import { Button, Input, Text, ThemeProvider, createTheme } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import { useAppDispatch } from '../../../features/redux/hooks';
import { loginThunk } from '../../../features/redux/slices/user/userThunk';
import { LoginType } from '../../../types/user/UserType';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </View>
  );
}
