import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';

import { ImagesAssets } from '../../../assets/imageAssets.ts';
import clickSound from '../../../features/clickSound';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { addPoint } from '../../../features/redux/slices/game/gameSlice';
import { getQuestionOptionThunk } from '../../../features/redux/slices/question/questionSlice';
import SelectButton from '../../ui/Buttons/SelectButton';
import HardQuestionText from '../../ui/Text/HardQuestionText';

type HardRoundProps = {
  navigation: StackNavigationProp<any, any>;
};

export default function SelectRound({ navigation }: HardRoundProps): JSX.Element {
  const animations = ['fadeInUpBig', 'fadeInDownBig', 'fadeInLeftBig', 'fadeInRightBig'];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestionOptionThunk(3));
  }, []);

  const question = useAppSelector((store) => store.questions);

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

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
    setSubmitButtonDisabled(false);
  };
  return (
    <>
      <Image style={styles.image} source={ImagesAssets.avatar3} />
      {arrowButton ? (
        <Image style={styles.questionImage} source={{ uri: question.img }} />
      ) : (
        <Text style={styles.timer}>{timeRemaining}</Text>
      )}

      <View style={styles.container}>
        <Animatable.View animation={'lightSpeedIn'} duration={800}>
          <View style={styles.blueFon}>
            <Text style={styles.text}>Несколько вариантов</Text>
          </View>
        </Animatable.View>
        <View style={{ marginTop: 200 }}>
          <Animatable.View animation={'zoomIn'} duration={1000}>
            <HardQuestionText question={question} key={question.id} />
          </Animatable.View>
        </View>
        <View style={{ gap: 10, marginTop: 40 }}>
          {question?.Options &&
            question?.Options.map((option, index) => (
              <Animatable.View key={option.id} animation={animations[index % 4]} duration={1000}>
                <TouchableOpacity
                  onPress={() => {
                    clickSound();
                    handlePress(option.title);
                  }}
                >
                  <SelectButton option={option} />
                </TouchableOpacity>
              </Animatable.View>
            ))}
        </View>
        <Button
          icon={<MaterialIcons name="arrow-forward" size={24} color="#ecc3fa" />}
          onPress={() => {
            clickSound();
            setTimerComplete(true);
            navigation.navigate('InputRound');
          }}
          disabled={submitButtonDisabled}
          buttonStyle={{ ...styles.submitButton, opacity: arrowButton ? 1 : 0 }}
        />
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
    backgroundColor: 'blue',
    marginBottom: 10,
    marginLeft: 300,
    width: 50,
    borderRadius: 15,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowColor: '#ecc3fa',
    shadowOpacity: 3,
    shadowRadius: 1,
  },
  text: {
    fontFamily: 'Jingle',
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
  whiteFon: {
    borderRadius: 10,
    alignItems: 'center',
    width: 250,
    height: 80,
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  blueFon: {
    borderRadius: 10,
    alignItems: 'center',
    width: 280,
    height: 50,
    backgroundColor: 'blue',
    shadowColor: 'white',
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 5,
    shadowRadius: 1,
    marginTop: 80,
    zIndex: 0,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    position: 'absolute',
    marginTop: 45,
    marginLeft: 165,
    zIndex: 1,
  },
  questionImage: {
    width: 160,
    height: 160,
    position: 'absolute',
    marginTop: 160,
    marginLeft: 115,
    zIndex: 2,
    borderRadius: 300,
  },
  timer: {
    position: 'absolute',
    marginTop: 160,
    marginLeft: 165,
    zIndex: 2,
    fontSize: 100,
    color: 'white',
    fontFamily: 'Jingle',
  },
});
