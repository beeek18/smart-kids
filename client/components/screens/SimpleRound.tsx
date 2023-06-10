import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import QuestionText from '../ui/Text/QuestionText';
import ChoiceButton from '../ui/Buttons.tsx/ChoiceButton';

export default function SimpleRound({ navigation }): JSX.Element {
  return (
    <>
      <View>
        <Button onPress={() => navigation.navigate('IntroTwoRound')} title="IntroRound" />
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <QuestionText />
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={styles.buttonContainer}>
              <ChoiceButton />
              <View style={styles.buttonSeparator} />
              <ChoiceButton />
            </View>
          </View>
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
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonSeparator: {
    width: 10,
  },
});
