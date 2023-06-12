import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { addPoint } from '../../../features/redux/slices/game/gameSlice';
import { getQuestionOptionThunk } from '../../../features/redux/slices/question/questionSlice';
import SelectButton from '../../ui/Buttons.tsx/SelectButton';
import HardQuestionText from '../../ui/Text/HardQuestionText';

export default function HardRound({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestionOptionThunk(3));
  }, []);

  const question = useAppSelector((store) => store.questions);

  const [timerComplete, setTimerComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!timerComplete) {
        setTimerComplete(true);
        navigation.navigate('InputRound');
      }
    }, 1000 * 15);

    return () => clearTimeout(timeout);
  }, [timerComplete]);

  const [arrowButton, setArrowButton] = useState(false);

  const handlePress = (answer: string) => {
    if (answer === question.answer) {
      dispatch(addPoint());
    }
    setArrowButton(true);
  };
  return (
    <>
      <View style={styles.container}>
        <View>
          {/* {questions.map((question) => ( */}
          <HardQuestionText question={question} key={question.id} />
          {/* ))} */}
        </View>
        <View style={{ marginTop: 20 }}>
          {question?.Options &&
            question?.Options.map((option) => (
              <TouchableOpacity
                onPress={() => {
                  handlePress(option.title);
                }}
                key={option.id}
              >
                <SelectButton option={option} />
              </TouchableOpacity>
            ))}
        </View>
      </View>
      <View>
        {arrowButton && (
          <Button
            icon={<MaterialIcons name="arrow-forward" size={40} />}
            onPress={() => {
              setTimerComplete(true);
              navigation.navigate('InputRound');
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
    backgroundColor: '#ebe134',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: 'white',
    color: 'blue',
  },
});
