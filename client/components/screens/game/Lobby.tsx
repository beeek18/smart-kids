import { useEffect } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { ImagesAssets } from '../../../assets/imageAssets';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import {
  joinRoomAction,
  leftRoomAction,
  statusGameAction,
} from '../../../features/redux/slices/game/gameAction';

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
    <View>
      <Text>Friends</Text>
      {allPlayers.map((player) => (
        <View key={player.id}>
          <Text>{player.username}</Text>
          <Image
            style={{ width: 80, height: 80, marginRight: 30, marginLeft: 10 }}
            source={ImagesAssets[player.img]}
          />
        </View>
      ))}
      <Button title="НАЧАТЬ" onPress={handleStart} />
      <Button title="Назад" onPress={leftLobby} />
    </View>
  );
}
