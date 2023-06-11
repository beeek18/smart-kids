import { Button, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { useEffect } from 'react';
import { joinRoomAction } from '../../features/redux/slices/game/gameAction';
import { updateGameStatus } from '../../features/redux/slices/game/gameSlice';
import { UserType } from '../../types/user/UserType';

export default function FriendsList({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(joinRoomAction(user));
    dispatch(updateGameStatus('InRoom'));
  }, []);

  const game = useAppSelector((state) => state.game);

  return (
    <View>
      <Text>Friends</Text>
      {game?.allPlayers.map((player) => (
        <Text key={player.id}>{player.username}</Text>
      ))}
      <Button title="IntroRound" onPress={() => navigation.navigate('IntroRound')} />
    </View>
  );
}
