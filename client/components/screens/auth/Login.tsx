import { Input, Text } from '@rneui/themed';
import { useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ImagesAssets } from '../../../assets/imageAssets';
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
  const handleTap = (): void => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <KeyboardAvoidingView style={styles.view} behavior="padding">
        <View style={styles.whiteFonAuto}>
          <Text style={styles.textAuthorize}>ВОЙТИ В АККАУНТ</Text>
        </View>
        <View>
          <Input
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
            style={styles.whiteFonInputs}
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
              width: 250,
            }}
          ></Input>
        </View>
        <TouchableOpacity onPress={loginHandler} style={styles.whiteFonInputs}>
          <Text style={styles.text}>Войти</Text>
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
    fontSize: 28,
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 42,
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
});
