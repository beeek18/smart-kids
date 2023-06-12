import { Input } from '@rneui/base';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import HardQuestionText from '../ui/Text/HardQuestionText';
import HardButton from '../ui/Buttons.tsx/SelectButton';
import SelectButton from '../ui/Buttons.tsx/SelectButton';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { useEffect, useState } from 'react';
import { getQuestionsThunk } from '../../features/redux/slices/question/questionSlice';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

export default function HardRound({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestionOptionThunk(3));
  }, []);

  const question = useAppSelector((store) => store.questions);
  console.log(question[0].Options);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('HardTwoRound');
    }, 1000 * 15);

    return () => clearTimeout(timeout);
  }, []);

  const [arrowButton, setArrowButton] = useState(false);

  const handlePress = () => {
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
          <TouchableOpacity onPress={() => handlePress()}>
            <SelectButton />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress()}>
            <SelectButton />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress()}>
            <SelectButton />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress()}>
            <SelectButton />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {arrowButton && (
          <Button
            icon={<MaterialIcons name="arrow-forward" size={40} />}
            onPress={() => navigation.navigate('HardTwoRound')}
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
