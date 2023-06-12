import { Button, Image, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { useEffect } from 'react';
import { joinRoomAction } from '../../features/redux/slices/game/gameAction';
import { updateGameStatus } from '../../features/redux/slices/game/gameSlice';
import { ImagesAssets } from '../../assets/imageAssets';
import { UserType } from '../../types/user/UserType';
import { socketInit } from '../../features/ws/wsActions';

export default function FriendsList({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  const game = useAppSelector((state) => state.game);

  const players = game.allPlayers.filter((player, i) => game.allPlayers.indexOf(player) === i);

  useEffect(() => {
    dispatch(joinRoomAction(user));
    dispatch(updateGameStatus('InRoom'));
  }, []);

  return (
    <View>
      <Text>Friends</Text>
      {players.map((player) => (
        <View key={player.id}>
          <Text>{player.username}</Text>
          <Image
            style={{ width: 80, height: 80, marginRight: 30, marginLeft: 10 }}
            source={ImagesAssets[player.img]}
          />
        </View>
      ))}
      <Button title="IntroRound" onPress={() => navigation.navigate('IntroRound')} />
    </View>
  );
}
