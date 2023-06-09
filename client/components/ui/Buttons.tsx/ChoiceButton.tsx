import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function ChoiceButton(): JSX.Element {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Да/Нет</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
