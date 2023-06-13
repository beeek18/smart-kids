import { Image, StyleSheet, Text, View } from 'react-native';
import ChoiceButton from '../../ui/Buttons.tsx/ChoiceButton';
import { ImagesAssets } from '../../../assets/imageAssets';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

export default function Welcome({ navigation }): JSX.Element {
  return (
    <View style={styles.view}>
      <View style={styles.whiteFon}>
        <Text style={styles.text}>DЕТИ - УМНЫЕ!</Text>
        <Text style={styles.textCard}>Но кто станет самым умным в этой викторине?</Text>
      </View>
      <Image style={styles.image} source={ImagesAssets.avatar2} />
      <Button
        icon={<MaterialIcons name="arrow-forward" size={40} color={'blue'} />}
        onPress={() => {
          navigation.navigate('Autorization');
        }}
        buttonStyle={styles.submitButton}
      />
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
    shadowOffset: { width: -7, height: 7 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  image: {
    marginTop: 50,
    marginLeft: 20,
    width: 300,
    height: 300,
  },
  view: {
    paddingTop: 40,
    paddingLeft: 30,
    flex: 1,
    backgroundColor: '#ebe134',
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
  submitButton: {
    marginBottom: 10,
    marginLeft: 250,
    borderRadius: 15,
    width: 65,
    height: 65,
    backgroundColor: 'white',
    color: 'blue',
    shadowColor: 'blue',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },
});
