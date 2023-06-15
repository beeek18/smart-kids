import { useEffect } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ImagesAssets } from '../../../assets/imageAssets';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import {
  joinRoomAction,
  leftRoomAction,
  statusGameAction,
} from '../../../features/redux/slices/game/gameAction';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import clickSound from '../../../features/clickSound';

export default function Lobby({ navigation }): JSX.Element {

  const dispatch = useAppDispatch();

  const allPlayers = useAppSelector((store) => store.game.allPlayers);
  const status = useAppSelector((store) => store.game.status);
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(joinRoomAction(user));
    dispatch(statusGameAction('InRoom'));
  }, []);

  const handleStart = () => {
    navigation.navigate('IntroSimple');
    dispatch(statusGameAction('InGame'));
  };

  const leftLobby = () => {
    dispatch(leftRoomAction(user));
    dispatch(statusGameAction(null));
    navigation.navigate('Categories');
  };

  useEffect(() => {
    if (status === 'InGame') navigation.navigate('IntroSimple');
  }, [status]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Комната ожидания</Text>
      <View style={styles.list}>
        {allPlayers.map((player) => (
          <View key={player.id} style={styles.player}>
            <Image style={styles.image} source={ImagesAssets[player.img]} />
            <Text style={styles.text}>{player.username}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttons}>
        <Button
          icon={<MaterialIcons name="arrow-back" color={'blue'} size={24} />}
          onPress={() => {
            clickSound();
            leftLobby();
          }}
          buttonStyle={styles.submitButton}
        />
        <TouchableOpacity
          onPress={() => {
            clickSound();
            handleStart();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Начать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe134',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 80,
    fontSize: 40,
    color: 'blue',
    fontFamily: 'Jingle',
  },
  list: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
    position: 'absolute',
    top: 150,
    borderRadius: 10,
    padding: 10,
    paddingTop: 20,
    gap: 15,
    width: 300,
    elevation: 2,
    shadowOffset: {
      width: -10,
      height: 10,
    },
    shadowColor: 'blue',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  player: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    color: 'blue',
    fontFamily: 'Jingle',
  },
  buttons: {
    position: 'absolute',
    bottom: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
    fontFamily: 'Jingle',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowOffset: {
      width: -7,
      height: 7,
    },
    shadowColor: 'blue',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  submitButton: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowColor: 'blue',
    shadowOpacity: 3,
    shadowRadius: 1,
  },
});
