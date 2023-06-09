import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultTable(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Результат!</Text>
      <View style={styles.row}>
        <Text style={styles.place}>1.</Text>
        <Text style={styles.name}>Иван</Text>
        <Text style={styles.result}>1/5</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.place}>2.</Text>
        <Text style={styles.name}>Мария</Text>
        <Text style={styles.result}>3/5</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.place}>3.</Text>
        <Text style={styles.name}>Алексей</Text>
        <Text style={styles.result}>2/5</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.place}>4.</Text>
        <Text style={styles.name}>Елена</Text>
        <Text style={styles.result}>4/5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    marginRight: 10,
  },
  result: {
    flex: 1,
    marginRight: 10,
    textAlign: 'center',
  },
  place: {
    flex: 1,
    textAlign: 'right',
  },
});
