import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import ResultTable from '../ui/ResultTable';

export default function Result({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <ResultTable />
      <View style={styles.buttonsContainer}>
        <Button title="Играть снова" onPress={() => navigation.navigate('IntroRound')} />
        <Button title="Выйти" onPress={() => navigation.navigate('Home')} />
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
