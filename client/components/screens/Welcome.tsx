import React from 'react';
import { Button, View, Text } from 'react-native';

export default function Welcome({ navigation }): JSX.Element {
  return (
    <View>
      <Text>WELCOME</Text>
      <Button onPress={() => navigation.navigate('Autorization')} title="Autorization" />
    </View>
  );
}
