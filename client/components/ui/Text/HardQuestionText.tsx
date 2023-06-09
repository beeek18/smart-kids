import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HardQuestionText(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>QuestionText</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 120,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
