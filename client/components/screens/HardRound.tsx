import { Input } from '@rneui/base';
import { Button, Text, View, StyleSheet } from 'react-native';
import HardQuestionText from '../ui/Text/HardQuestionText';
import HardButton from '../ui/Buttons.tsx/SelectButton';
import SelectButton from '../ui/Buttons.tsx/SelectButton';
import { useEffect } from 'react';

export default function HardRound({ navigation }): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('HardTwoRound');
    }, 1000 * 15);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View>
          <HardQuestionText />
        </View>
        <View style={{ marginTop: 20 }}>
          <SelectButton />
          <SelectButton />
          <SelectButton />
          <SelectButton />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebe134',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
