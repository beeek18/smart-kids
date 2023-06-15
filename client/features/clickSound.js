import { Audio } from 'expo-av';

async function clickSound() {
  try {
    const { sound } = await Audio.Sound.createAsync(require('../assets/click.wav'));
    await sound.playAsync();
    // console.log('Sound loaded', sound);
  } catch (error) {
    console.log(error);
  }
}


export default clickSound;
