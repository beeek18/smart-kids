import { StyleSheet, View } from 'react-native';
import ChoiceButton from './Buttons.tsx/ChoiceButton';
import QuestionText from './Text/QuestionText';

export default function SimpleQuestion(): JSX.Element {
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
