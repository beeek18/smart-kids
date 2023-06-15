import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button, Image, Input, Text } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { addPoint } from '../../../features/redux/slices/game/gameSlice';
import { getQuestionsThunk } from '../../../features/redux/slices/question/questionSlice';
import HardQuestionText from '../../ui/Text/HardQuestionText';
import InputQuestion from '../../ui/Text/InputQuestionText';
import { ImagesAssets } from '../../../assets/imageAssets';

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

  const [arrowButton, setArrowButton] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    dispatch(getQuestionsThunk(4));
  }, []);

  const question = useAppSelector((store) => store.questions);

  const handleTap = (): void => {
    Keyboard.dismiss();
  };

  const [answer, setAnswer] = useState('');
  const [answered, setAnswered] = useState(false);

  const handleSubmit = () => {
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      dispatch(addPoint());
    }
    setArrowButton(true);
    setSubmitButtonDisabled(false);
    handleTap();
    setShowImage(true);
    setAnswered(true);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.timer}>{timeRemaining}</Text>
        </View>
        <TouchableWithoutFeedback onPress={handleTap}>
          <View style={styles.content}>
            {showImage ? (
              <Image
                source={{ uri: question.img }}
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: 150,
                }}
              />
            ) : (
              <View style={styles.banner}>
                <Text style={styles.bannerText}>Введите ответ</Text>
              </View>
            )}
            <View>
              <View style={{ position: 'relative', top: -190, height: 150, zIndex: 1 }}>
                <Image style={styles.image} source={ImagesAssets.avatar4} />
              </View>
              <InputQuestion
                question={question}
                answer={answer}
                setAnswer={setAnswer}
                handleSubmit={handleSubmit}
                answered={answered}
              />
              <View />
            </View>
            <View style={styles.inputContainer}></View>
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Button
            icon={<MaterialIcons name="arrow-forward" size={26} color={'#ebe134'} />}
            onPress={() => {
              setTimerComplete(true);
              navigation.navigate('Result');
            }}
            disabled={submitButtonDisabled}
            buttonStyle={{ ...styles.submitButton, opacity: arrowButton ? 1 : 0 }}
          />
        </View>
      </View>
    </>
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
    rowGap: 140,
  },
  banner: {
    padding: 10,
    height: 70,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'blue',
    marginBottom: 100,
    shadowColor: '#ebe134',
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  bannerText: {
    color: '#ebe134',
    marginBottom: 0,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Jingle',
  },
  image: {
    width: 190,
    right: 0,
    height: 100,
    resizeMode: 'contain',
    zIndex: 9999,
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
    backgroundColor: 'blue',
    marginBottom: 40,
    marginLeft: 290,
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
    top: -200,
    marginLeft: 280,
    color: 'white',
    fontFamily: 'Jingle',
  },
});
