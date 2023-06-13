import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { addPoint } from '../../../features/redux/slices/game/gameSlice';
import { getQuestionsThunk } from '../../../features/redux/slices/question/questionSlice';
import QuestionText from '../../ui/Text/QuestionText';

import { MaterialIcons } from '@expo/vector-icons';
import { ImagesAssets } from '../../../assets/imageAssets';

export default function SimpleRound({ navigation }): JSX.Element {
  const [timerComplete, setTimerComplete] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!timerComplete) {
  //       setTimerComplete(true);
  //       navigation.navigate('RightRound');
  //     }
  //   }, 1000 * 15);

  //   return () => clearTimeout(timeout);
  // }, [timerComplete]);

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
        <View>
          <Image style={styles.image} source={ImagesAssets.avatar4} />
        </View>
        <QuestionText question={question} />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonYes} onPress={() => handlePress('Да')}>
              <Text style={styles.buttonYesText}>ДА</Text>
            </TouchableOpacity>
            <View style={styles.buttonSeparator} />
            <TouchableOpacity style={styles.buttonNo} onPress={() => handlePress('Нет')}>
              <Text style={styles.buttonNoText}>НЕТ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {arrowButton && (
        <Button
          icon={<MaterialIcons name="arrow-forward" size={24} color={'#ebe134'} />}
          onPress={() => {
            setTimerComplete(true);
            navigation.navigate('RightRound');
          }}
          buttonStyle={styles.submitButton}
        />
      )}
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
    marginBottom: 10,
  },
  image: {
    marginTop: 30,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100,
    paddingHorizontal: 20,
    gap: 20,
    marginLeft: 10,
  },
  buttonSeparator: {
    width: 10,
  },
  buttonYes: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: -7,
      height: 7,
    },
    shadowColor: '#ebe134',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  buttonNo: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: -7,
      height: 7,
    },
    shadowColor: '#f2b1ed',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  buttonYesText: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ebe134',
    fontFamily: 'Jingle',
  },
  buttonNoText: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#f2b1ed',
    fontFamily: 'Jingle',
  },
  submitButton: {
    backgroundColor: 'blue',
    marginBottom: 40,
    marginLeft: 250,
    width: 50,
    borderRadius: 15,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowColor: '#ebe134',
    shadowOpacity: 3,
    shadowRadius: 1,
  },
});
