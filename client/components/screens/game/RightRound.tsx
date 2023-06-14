import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { addPoint } from '../../../features/redux/slices/game/gameSlice';
import { getQuestionsThunk } from '../../../features/redux/slices/question/questionSlice';
import QuestionText from '../../ui/Text/QuestionText';

import { MaterialIcons } from '@expo/vector-icons';
import { ImagesAssets } from '../../../assets/imageAssets';

export default function RightRound({ navigation }): JSX.Element {
  const [timerComplete, setTimerComplete] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!timerComplete) {
  //       setTimerComplete(true);
  //       navigation.navigate('IntroHard');
  //     }
  //   }, 1000 * 15);

  //   return () => clearTimeout(timeout);
  // }, [timerComplete]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestionsThunk(2));
  }, []);

  const question = useAppSelector((store) => store.questions);

  const [arrowButton, setArrowButton] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const handlePress = (text: string) => {
    if (text === question.answer) {
      dispatch(addPoint());
    }
    setArrowButton(true);
    setSubmitButtonDisabled(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: question.img }}
          style={{ width: 300, height: 300, borderRadius: 150 }}
        />
        <QuestionText question={question} />
        <View style={{ position: 'absolute', height: 150 }}>
          <Image style={styles.image} source={ImagesAssets.avatar4} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('Верно')}>
              <Text style={styles.buttonText}>Верно</Text>
            </TouchableOpacity>
            <View style={styles.buttonSeparator} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handlePress('Неверно');
              }}
            >
              <Text style={styles.buttonText}>Неверно</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button
        icon={<MaterialIcons name="arrow-forward" size={24} color="#ebe134" />}
        onPress={() => {
          clearTimeout(setTimerComplete(true));
          navigation.navigate('IntroHard');
        }}
        disabled={submitButtonDisabled}
        buttonStyle={{ ...styles.submitButton, opacity: arrowButton ? 1 : 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcaf62',
    zIndex: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 190,
    right: 0,
    bottom: 100,
    height: 100,
    resizeMode: 'contain',
    zIndex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 20,
    marginLeft: 10,
  },
  buttonSeparator: {
    width: 10,
  },
  button: {
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
  buttonText: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ebe134',
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
