import { Input } from '@rneui/base';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import HardQuestionText from '../ui/Text/HardQuestionText';
import HardButton from '../ui/Buttons.tsx/SelectButton';
import SelectButton from '../ui/Buttons.tsx/SelectButton';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons';

export default function HardRound({ navigation }): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('HardTwoRound');
    }, 1000 * 15);

    return () => clearTimeout(timeout);
  }, []);

  const [arrowButton, setArrowButton] = useState(false);

  const handlePress = () => {
    setArrowButton(true);
  };
  return (
    <>
      <View style={styles.container}>
        <View>
          <HardQuestionText />
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => handlePress()}>
            <SelectButton />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress()}>
            <SelectButton />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress()}>
            <SelectButton />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress()}>
            <SelectButton />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {arrowButton && (
          <Button
            icon={<MaterialIcons name="arrow-forward" size={40} />}
            onPress={() => navigation.navigate('HardTwoRound')}
            buttonStyle={styles.submitButton}
          />
        )}
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
  submitButton: {
    backgroundColor: 'white',
    color: 'blue',
  },
});
