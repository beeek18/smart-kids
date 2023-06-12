import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HardQuestionText from '../ui/Text/HardQuestionText';
import { Input, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { getQuestionsThunk } from '../../features/redux/slices/question/questionSlice';

export default function HardTwoRound({ navigation }): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Result');
    }, 1000 * 15);

    return () => clearTimeout(timeout);
  }, []);

  const dispatch = useAppDispatch();
  const [answer, setAnswer] = useState('');

  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setArrowButton(true);
    // Обработка отправки ответа
    // console.log('Submitted answer:', answer);
  };

  const [arrowButton, setArrowButton] = useState(false);

  useEffect(() => {
    dispatch(getQuestionsThunk(4));
  }, []);

  const question = useAppSelector((store) => store.questions);

  return (
    <>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <View>
            <HardQuestionText question={question} />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Your Answer"
              value={answer}
              onChangeText={setAnswer}
              containerStyle={styles.input}
            />
            <Button
              icon={<MaterialIcons name="arrow-forward" size={24} color="white" />}
              onPress={handleSubmit}
              buttonStyle={styles.submitButton}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View>
        {arrowButton && (
          <Button
            icon={<MaterialIcons name="arrow-forward" size={40} />}
            onPress={() => navigation.navigate('Result')}
            buttonStyle={styles.submitButton}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebe134',
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: '#ebe134',
  },
});
