import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

export default function IntroRound({ navigation }): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>ПРОСТОЙ РАУНД</Text>
        </View>
        <View>
          <Image style={styles.image} source={require('../../assets/icons/avatar1.png')} />
        </View>
        <Button
          icon={<MaterialIcons name="arrow-forward" size={24} />}
          onPress={() => navigation.navigate('SimpleRound')}
          buttonStyle={styles.submitButton}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    width: 200,
    height: 100,
  },
  bannerText: {
    color: '#ebe134',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    marginTop: 50,
    marginLeft: 20,
    width: 350,
    height: 310,
  },
  submitButton: {
    backgroundColor: '#fff',
    color: 'blue',
    marginTop: 50,
    borderRadius: 20,
  },
});
