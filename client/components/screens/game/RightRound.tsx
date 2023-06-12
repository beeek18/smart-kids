import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { addPoint } from '../../../features/redux/slices/game/gameSlice';
import { getQuestionsThunk } from '../../../features/redux/slices/question/questionSlice';
import QuestionText from '../../ui/Text/QuestionText';

import { MaterialIcons } from '@expo/vector-icons';

export default function RightRound({ navigation }): JSX.Element {
  const [timerComplete, setTimerComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!timerComplete) {
        setTimerComplete(true);
        navigation.navigate('IntroHard');
      }
    }, 1000 * 15);

    return () => clearTimeout(timeout);
  }, [timerComplete]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestionsThunk(2));
  }, []);

  const question = useAppSelector((store) => store.questions);

  const [arrowButton, setArrowButton] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <QuestionText question={question} />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setArrowButton(true)}>
              <Text style={styles.buttonText}>Верно</Text>
            </TouchableOpacity>
            <View style={styles.buttonSeparator} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setArrowButton(true), dispatch(addPoint());
              }}
            >
              <Text style={styles.buttonText}>Неверно</Text>
            </TouchableOpacity>
            <View>
              {arrowButton && (
                <Button
                  icon={<MaterialIcons name="arrow-forward" size={40} />}
                  onPress={() => {
                    clearTimeout(setTimerComplete(true));
                    navigation.navigate('IntroHard');
                  }}
                  buttonStyle={styles.submitButton}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonSeparator: {
    width: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'yellow',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  submitButton: {
    backgroundColor: 'white',
    color: 'blue',
  },
});
