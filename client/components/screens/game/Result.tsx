import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import {
  getAllScoreAction,
  statusGameAction,
} from '../../../features/redux/slices/game/gameAction';
import { resetRoom } from '../../../features/redux/slices/game/gameSlice';

export default function Result({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();

  const handlePlayAgain = () => {
    navigation.navigate('Categories');
    dispatch(resetRoom());
  };

  const handleHome = () => {
    navigation.navigate('Home');
    dispatch(resetRoom());
  };

  const score = useAppSelector((store) => store.game.score);
  const username = useAppSelector((store) => store.user.username);

  useEffect(() => {
    dispatch(statusGameAction('Finished'));
    dispatch(getAllScoreAction({ username, score }));
  }, []);

  const allScores = useAppSelector((store) => store.game.allScores);

  return (
    <View style={styles.container}>
      {/* <ResultTable /> */}
      {allScores.map((resultUser, i) => (
        <Text key={i}>
          {resultUser.username} : {resultUser.score} очков
        </Text>
      ))}
      <View style={styles.buttonsContainer}>
        <Button title="Играть снова" onPress={handlePlayAgain} />
        <Button title="Выйти" onPress={handleHome} />
      </View>
      <Text style={styles.footer}>Спасибо за игру!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebe134',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footer: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
