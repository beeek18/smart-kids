import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HardQuestionText from '../ui/Text/HardQuestionText';
import { Input, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

export default function HardTwoRound({ navigation }): JSX.Element {
  const [answer, setAnswer] = useState('');

  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    // Обработка отправки ответа
    // console.log('Submitted answer:', answer);
  };

  return (
    <>
      <View>
        <Button onPress={() => navigation.navigate('Result')} title="Result" />
      </View>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.container}>
          <View>
            <HardQuestionText />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Your Answer"
              value={answer}
              onChangeText={setAnswer}
              onFocus={handleKeyboardDismiss}
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
