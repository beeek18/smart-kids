import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { addPoint } from '../../../features/redux/slices/game/gameSlice';
import { getQuestionsThunk } from '../../../features/redux/slices/question/questionSlice';
import QuestionText from '../../ui/Text/QuestionText';

import { MaterialIcons } from '@expo/vector-icons';

export default function SimpleRound({ navigation }): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('RightRound');
    }, 1000 * 15);

    return () => clearTimeout(timeout);
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestionsThunk(1));
  }, []);

  const question = useAppSelector((store) => store.questions);

  const [arrowButton, setArrowButton] = useState(false);

  const handlePress = (text: string) => {
    if (text === question.answer) {
      dispatch(addPoint());
    }
    setArrowButton(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* {questions.map((question) => ( */}
        <QuestionText question={question} />
        {/* ))} */}
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('Да')}>
              <Text style={styles.buttonText}>Да</Text>
            </TouchableOpacity>
            <View style={styles.buttonSeparator} />
            <TouchableOpacity style={styles.button} onPress={() => handlePress('Нет')}>
              <Text style={styles.buttonText}>Нет</Text>
            </TouchableOpacity>
            <View>
              {arrowButton && (
                <Button
                  icon={<MaterialIcons name="arrow-forward" size={40} />}
                  onPress={() => navigation.navigate('RightRound')}
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
