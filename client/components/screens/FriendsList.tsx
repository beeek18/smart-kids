import { Button, Image, Text, View } from 'react-native';
import { ImagesAssets } from '../../assets/imageAssets';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { joinRoomAction, statusGameAction } from '../../features/redux/slices/game/gameAction';
import { useEffect } from 'react';

export default function FriendsList({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();

  const allPlayers = useAppSelector((store) => store.game.allPlayers);
  const status = useAppSelector((store) => store.game.status);
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(joinRoomAction(user));
    dispatch(statusGameAction('InRoom'));
  }, []);

  const handleStart = () => {
    navigation.navigate('IntroRound');
    dispatch(statusGameAction('InGame'));
  };

  useEffect(() => {
    if (status === 'InGame') navigation.navigate('IntroRound');
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
    </View>
  );
}
