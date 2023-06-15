import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { addPoint } from '../../../features/redux/slices/game/gameSlice';
import { getQuestionsThunk } from '../../../features/redux/slices/question/questionSlice';
import HardQuestionText from '../../ui/Text/HardQuestionText';
import clickSound from '../../../features/clickSound';

export default function HardTwoRound({ navigation }): JSX.Element {

  const [timerComplete, setTimerComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(15);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((time) => (time - 1 > 0 ? time - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!timerComplete) {
        setTimerComplete(true);
        navigation.navigate('Result');
      }
    }, 1000 * 15);

    return () => clearTimeout(timeout);
  }, [timerComplete]);

  const dispatch = useAppDispatch();
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      dispatch(addPoint());
    }
    setArrowButton(true);
  };

  const [arrowButton, setArrowButton] = useState(false);

  useEffect(() => {
    dispatch(getQuestionsThunk(4));
  }, []);

  const question = useAppSelector((store) => store.questions);

  return (
    <>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <View>
            <Text style={styles.timer}>{timeRemaining}</Text>
          </View>
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
              onPress={() => {
                clickSound();
                handleSubmit();
              }}
              buttonStyle={styles.submitButton}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View>
        {arrowButton && (
          <Button
            icon={<MaterialIcons name="arrow-forward" size={40} />}
            onPress={() => {
              clickSound();
              setTimerComplete(true);
              navigation.navigate('Result');
            }}
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
  timer: {
    fontSize: 60,
    top: -200,
    marginLeft: 280,
    color: 'white',
    fontFamily: 'Jingle',
  },
});
