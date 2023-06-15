import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';

import { QuestionType } from '../../../types/question/QuestionType';
import { ImagesAssets } from '../../../assets/imageAssets';

type InputQuestionTextProps = {
  question: QuestionType;
  answer: string;
  setAnswer: (answer: string) => void;
  handleSubmit: () => void;
  answered: boolean;
};

export default function InputQuestionText({
  question,
  answer,
  setAnswer,
  handleSubmit,
  answered,
}: InputQuestionTextProps): JSX.Element {
  return (
    <>
      <KeyboardAvoidingView style={styles.view} behavior="padding">
        <View style={styles.container}>
          <Text style={styles.text}>{question?.title}</Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Ответ"
              value={answer}
              onChangeText={setAnswer}
              containerStyle={styles.input}
              inputStyle={styles.inputText}
            />
            <View style={{ position: 'absolute', left: 175, top: -4, height: 200, width: 200 }}>
              <Image
                style={{
                  ...styles.imageCrown,
                  opacity:
                    answered && question.answer.toLowerCase().trim() === answer.toLowerCase().trim()
                      ? 1
                      : 0,
                }}
                source={ImagesAssets.crown}
              />
            </View>
            <Button
              icon={<MaterialIcons name="done" size={24} color="white" />}
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
    zIndex: 0,
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
    zIndex: 0,
  },
  imageCrown: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    transform: [{ rotate: '353deg' }],
    zIndex: 1,
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
    zIndex: 0,
  },
  inputText: {
    textAlign: 'center',
    fontFamily: 'Jingle',
    zIndex: 0,
    borderBottomWidth: 1.5,
    borderColor: 'blue',
  },
  submitButton: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 15,
    marginBottom: 15,
  },
});
