import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QuestionText(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>QuestionText</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff8c00',
    padding: 10,
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
