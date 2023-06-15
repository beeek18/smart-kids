import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { addPoint } from '../../../features/redux/slices/game/gameSlice';
import { getQuestionsThunk } from '../../../features/redux/slices/question/questionSlice';
import QuestionText from '../../ui/Text/QuestionText';
import { MaterialIcons } from '@expo/vector-icons';
import { ImagesAssets } from '../../../assets/imageAssets';
import * as Animatable from 'react-native-animatable';

export default function SimpleRound({ navigation }): JSX.Element {
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
        navigation.navigate('RightRound');
      }
    }, 1000 * 15);

    return () => clearTimeout(timeout);
  }, [timerComplete]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestionsThunk(1));
  }, []);

  const question = useAppSelector((store) => store.questions);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const [arrowButton, setArrowButton] = useState(false);

  const handlePress = (text: string) => {
    if (text === question.answer) {
      dispatch(addPoint());
    }
    setArrowButton(true);
    setSubmitButtonDisabled(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.timer}>{timeRemaining}</Text>
        </View>
        <View style={styles.content}>
          <Animatable.View animation={'wobble'} duration={1000}>
            <QuestionText question={question} />
          </Animatable.View>

          <View style={{ position: 'absolute', height: 450 }}>
            <Image style={styles.image} source={ImagesAssets.avatar4} />
          </View>
          <View
            style={{
              width: 300,
              height: 70,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Image
              style={{
                ...styles.imageCrown,
                opacity: arrowButton && question.answer === 'Да' ? 1 : 0,
              }}
              source={ImagesAssets.crown}
            />
            <Image
              style={{
                ...styles.imageCrown,
                opacity: arrowButton && question.answer === 'Нет' ? 1 : 0,
              }}
              source={ImagesAssets.crown}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Animatable.View animation={'bounceInLeft'} duration={1000}>
              <TouchableOpacity style={styles.button} onPress={() => handlePress('Да')}>
                <Text style={styles.buttonText}>ДА</Text>
              </TouchableOpacity>
            </Animatable.View>
            <View style={styles.buttonSeparator} />
            <Animatable.View animation={'bounceInRight'} duration={1000}>
              <TouchableOpacity style={styles.button} onPress={() => handlePress('Нет')}>
                <Text style={styles.buttonText}>НЕТ</Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </View>
        <Button
          icon={<MaterialIcons name="arrow-forward" size={24} color={'#ebe134'} />}
          onPress={() => {
            setTimerComplete(true);
            navigation.navigate('RightRound');
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecc3fa',
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
    bottom: 150,
    height: 100,
    resizeMode: 'contain',
    zIndex: 1,
  },
  imageCrown: {
    width: 60,
    height: 60,
    marginTop: 7,
    resizeMode: 'contain',
    transform: [{ rotate: '353deg' }],
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 30,
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
  timer: {
    fontSize: 60,
    top: 90,
    marginLeft: 280,
    color: 'white',
    fontFamily: 'Jingle',
  },
});
