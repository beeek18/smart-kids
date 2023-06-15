import { Audio } from 'expo-av';

async function clickSound() {
  try {
    const { sound } = await Audio.Sound.createAsync(require('../assets/click.wav'));
    await sound.playAsync();
  } catch (error) {
    console.log(error);
  }
}

export default clickSound;
