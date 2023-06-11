import { Button, Image, Text, View } from 'react-native';
import { ImagesAssets } from '../../assets/imageAssets';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { statusGameAction } from '../../features/redux/slices/game/gameAction';

export default function FriendsList({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();

  const game = useAppSelector((store) => store.game);

  const handleStart = () => {
    navigation.navigate('IntroRound');
    dispatch(statusGameAction('InGame'));
  };

  return (
    <View>
      <Text>Friends</Text>
      {game.allPlayers.map((player) => (
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
