import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QuestionType } from '../../../types/question/QuestionType';

type QuestionTextProps = {
  question: QuestionType;
};

export default function QuestionText({ question }: QuestionTextProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebe134',
    padding: 10,
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
