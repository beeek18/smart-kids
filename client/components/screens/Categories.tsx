import ChoiceButton from '../ui/Buttons.tsx/ChoiceButton';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { joinRoomAction } from '../../features/redux/slices/game/gameAction';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { updateGameStatus } from '../../features/redux/slices/game/gameSlice';

export default function Categories({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(joinRoomAction(user));
    dispatch(updateGameStatus('InRoom'));
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Категории вопросов</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Да/Нет</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Верно/Неверно</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonHardText}>Несколько вариантов</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonHardText}>Заполните пропуски</Text>
          </Pressable>
        </View>
        <Button
          icon={<MaterialIcons name="arrow-forward" size={24} />}
          onPress={() => navigation.navigate('FriendsList')}
          buttonStyle={styles.submitButton}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe134',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    width: 200,
    height: 100,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonHardText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  submitButton: {
    backgroundColor: '#fff',
    color: 'blue',
  },
});
