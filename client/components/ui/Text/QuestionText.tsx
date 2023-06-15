import { StyleSheet, Text, View } from 'react-native';
import { QuestionType } from '../../../types/question/QuestionType';

type QuestionTextProps = {
  question: QuestionType;
};

export default function QuestionText({ question }: QuestionTextProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebe134',
    padding: 10,
    width: 300,
    height: 150,
    borderRadius: 10,
    marginBottom: 30,
    shadowOffset: {
      width: -7,
      height: 7,
    },
    shadowColor: 'blue',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  text: {
    color: 'blue',
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Jingle',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 35,
  },
});
