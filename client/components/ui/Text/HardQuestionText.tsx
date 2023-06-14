import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QuestionType } from '../../../types/question/QuestionType';
import { Input } from 'react-native-elements';

type Props = {
  question: QuestionType;
};

export default function HardQuestionText({ question }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 120,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: 'blue',
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  text: {
    color: 'blue',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Jingle',
  },
});
