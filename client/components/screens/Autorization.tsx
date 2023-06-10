import React, { useState } from 'react';
import { ThemeProvider, Button, createTheme, Input, Text } from '@rneui/themed';
import { useRoute } from '@react-navigation/native';
import { color } from '@rneui/base';
import { useAppDispatch } from '../../features/redux/hooks';
import { loginThunk } from '../../features/redux/slices/user/userThunk';
import { TextInput, View } from 'react-native';
import { LoginType } from '../../types/user/UserType';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

export default function Autorization({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('SignUp')} title="SignUp" />
      <Button onPress={() => navigation.navigate('Login')} title="Login" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     color: 'yellow',
//   },
// });
