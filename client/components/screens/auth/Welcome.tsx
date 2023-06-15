import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';

import { ImagesAssets } from '../../../assets/imageAssets.ts';

type WelcomeProps = {
  navigation: StackNavigationProp<any, any>;
};

export default function Welcome({ navigation }: WelcomeProps): JSX.Element {
  return (
    <View style={styles.view}>
      <Animatable.View animation={'bounceInRight'} duration={1500}>
        <View style={styles.whiteFon}>
          <Text style={styles.text}>DЕТИ - УМНЫЕ!</Text>
          <Text style={styles.textCard}>Но кто станет самым умным в этой викторине?</Text>
        </View>
      </Animatable.View>
      <Animatable.View animation={'flipInY'} duration={1500}>
        <Image style={styles.image} source={ImagesAssets.avatar2} />
      </Animatable.View>
      <Animatable.View animation={'lightSpeedIn'} duration={1500}>
        <Button
          icon={<MaterialIcons name="arrow-forward" size={40} color={'blue'} />}
          onPress={() => {
            navigation.navigate('Autorization');
          }}
          buttonStyle={styles.submitButton}
        />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 240,
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
    paddingTop: 100,
    paddingLeft: 30,
    flex: 1,
    backgroundColor: '#ebe134',
  },
  textCard: {
    lineHeight: 20,
    fontFamily: 'Jingle',
    color: 'blue',
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    lineHeight: 70,
    width: 220,
    fontFamily: 'Jingle',
    color: 'blue',
    fontSize: 65,
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
