import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { QuestionType } from '../../../types/question/QuestionType';
import { Button, Image, Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch } from '../../../features/redux/hooks';
import { ImagesAssets } from '../../../assets/imageAssets';

type Props = {
  question: QuestionType;
  answer: string;
  setAnswer: (answer: string) => void;
  handleSubmit: () => void;
};

export default function InputQuestionText({
  question,
  answer,
  setAnswer,
  handleSubmit,
}: Props): JSX.Element {
  return (
    <>
      <KeyboardAvoidingView style={styles.view} behavior="padding">
        <View style={styles.container}>
          <Text style={styles.text}>{question?.title}</Text>
          <View style={styles.inputContainer}>
            <Input
              value={answer}
              onChangeText={setAnswer}
              containerStyle={styles.input}
              inputStyle={styles.inputText}
            />
            <Button
              icon={<MaterialIcons name="arrow-forward" size={24} color="white" />}
              onPress={handleSubmit}
              buttonStyle={styles.submitButton}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 10,
    height: 120,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#ebe134',
    marginBottom: 230,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  inputText: {
    fontFamily: 'Jingle',
  },
  submitButton: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 15,
    marginBottom: 15,
  },
});
