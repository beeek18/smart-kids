import React, { useEffect, useState } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import ChoiceButton from '../ui/Buttons.tsx/ChoiceButton';

export default function Welcome({ navigation }): JSX.Element {
  // const [sound, setSound] = useState();
  // const [volume, setVolume] = useState(1);
  // async function setVolumeLower() {
  //   if (sound) {
  //     const newVolume = volume === 1 ? 0 : 1;
  //     await sound.setVolumeAsync(newVolume);
  //     setVolume(newVolume);
  //   }
  // }
  // async function playSound() {
  //   console.log('Loading Sound');
  //   const { sound } = await Audio.Sound.createAsync(require('../../assets/mainsound.mp3'));
  //   setSound(sound);
  //   console.log('Playing Sound');
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   playSound();
  // }, []);
  return (
    <View style={styles.view}>
      <View style={styles.whiteFon}>
        <Text style={styles.text}>DЕТИ - УМНЫЕ!</Text>
        <Text style={styles.textCard}>Но кто станет самым умным в этой викторине?</Text>
      </View>
      {/* <Button title="audio" onPress={playSound} /> */}
      <Button onPress={() => navigation.navigate('Autorization')} title="Autorization" />
      <Image style={styles.image} source={require('../../assets/icons/avatar2.png')} />
      <View style={styles.button}>
        <ChoiceButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 240,
    marginTop: -20,
  },
  whiteFon: {
    borderRadius: 10,
    alignItems: 'center',
    width: 325,
    height: 250,
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 10,
    shadowRadius: 10,
  },
  image: {
    marginTop: 50,
    marginLeft: 20,
    width: 300,
    height: 300,
  },
  view: {
    paddingTop: 40,
    // alignContent: 'center',
    paddingLeft: 30,
    flex: 1,
    backgroundColor: 'yellow',
  },
  textCard: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 17,
  },
  text: {
    color: 'blue',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 30,
  },
});
