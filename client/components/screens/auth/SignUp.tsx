import { Input } from '@rneui/themed';
import { useState } from 'react';
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
import { useAppDispatch } from '../../../features/redux/hooks';
import { signUpThunk } from '../../../features/redux/slices/user/userThunk';
import { SignUpType } from '../../../types/user/UserType';
import { ImagesAssets } from '../../../assets/imageAssets';

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
  const handleTap = (): void => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <KeyboardAvoidingView style={styles.view} behavior="padding">
        <View>
          <View style={styles.whiteFonAuto}>
            <Text style={styles.textAuthorize}>РЕГИСТРАЦИЯ</Text>
          </View>
          <View>
            <Input
              inputStyle={{ color: 'blue' }}
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
              inputStyle={{ color: 'blue' }}
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
              inputStyle={{ color: 'blue' }}
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
          </View>
          <TouchableOpacity style={styles.whiteFon}>
            <Text style={styles.text}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
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
