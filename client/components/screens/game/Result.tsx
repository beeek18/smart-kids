import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ImagesAssets } from '../../../assets/imageAssets.ts';
import clickSound from '../../../features/clickSound';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import {
  getAllScoreAction,
  statusGameAction,
} from '../../../features/redux/slices/game/gameAction';
import { resetRoom } from '../../../features/redux/slices/game/gameSlice';
import { addCrownUserThunk } from '../../../features/redux/slices/user/userThunk';

type ResultProps = {
  navigation: StackNavigationProp<any, any>;
};

export default function Result({ navigation }: ResultProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handlePlayAgain = () => {
    navigation.navigate('Categories');
    dispatch(resetRoom());
  };

  const handleHome = () => {
    navigation.navigate('Home');
    dispatch(resetRoom());
  };

  const score = useAppSelector((store) => store.game.score);
  const { username, img, id } = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(statusGameAction('Finished'));
    dispatch(getAllScoreAction({ username, score, img }));
    if (score === 4) {
      dispatch(addCrownUserThunk(id));
    }
  }, []);

  const playersScores = useAppSelector((store) => store.game.allScores);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Результаты</Text>
      <View style={styles.list}>
        {playersScores.map((player, i) => (
          <View key={i} style={styles.player}>
            <Image style={styles.image} source={ImagesAssets[player.img]} />
            <Text style={styles.text}>{player.username}</Text>
            <Text style={styles.text}>{player.score}/4</Text>
            {player.score === 4 && <Image style={styles.image} source={ImagesAssets['crown']} />}
          </View>
        ))}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            clickSound();
            handlePlayAgain();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Сыграть снова</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            clickSound();
            handleHome();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Главное меню</Text>
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
    flexDirection: 'column',
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
