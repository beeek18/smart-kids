import React, { useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import ResultTable from '../ui/ResultTable';
import { useAppDispatch } from '../../features/redux/hooks';
import { resetRoom } from '../../features/redux/slices/game/gameSlice';
import { statusGameAction } from '../../features/redux/slices/game/gameAction';

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

  useEffect(() => {
    dispatch(statusGameAction('Finished'));
  }, []);

  return (
    <View style={styles.container}>
      <ResultTable />
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
