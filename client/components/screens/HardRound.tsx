import { Input } from '@rneui/base';
import { Button, Text, View, StyleSheet } from 'react-native';
import HardQuestionText from '../ui/Text/HardQuestionText';
import HardButton from '../ui/Buttons.tsx/SelectButton';
import SelectButton from '../ui/Buttons.tsx/SelectButton';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { useEffect } from 'react';
import { getQuestionOptionThunk } from '../../features/redux/slices/question/questionSlice';

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

  return (
    <>
      <View style={styles.container}>
        <View>
          {/* {questions.map((question) => ( */}
          <HardQuestionText question={question} key={question.id} />
          {/* ))} */}
        </View>
        <View style={{ marginTop: 20 }}>
          <SelectButton />
          <SelectButton />
          <SelectButton />
          <SelectButton />
        </View>
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
});
