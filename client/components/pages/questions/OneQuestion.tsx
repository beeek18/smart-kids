import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChoiceButton from '../../ui/Buttons.tsx/ChoiceButton';
import QuestionText from '../../ui/Text/QuestionText';

export default function OneQuestion(): JSX.Element {
  const onPressYes = () => {
    console.log('Да');
  };

  const onPressNo = () => {
    console.log('Нет');
  };

  return (
    <View style={styles.container}>
      <View>
        <QuestionText />
        <View style={styles.buttonContainer}>
          <ChoiceButton />
        </View>
        <View style={styles.buttonContainer}>
          <ChoiceButton />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  question: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
