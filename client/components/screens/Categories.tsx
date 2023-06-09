import { Button, Text, View } from 'react-native';
import ChoiceButton from '../ui/Buttons.tsx/ChoiceButton';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { joinRoomAction } from '../../features/redux/slices/game/gameAction';

export default function Categories({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  return (
    <>
      <View>
        <Text>CATEGORIES</Text>
        <Button
          onPress={() => {
            dispatch(joinRoomAction(user));
            return navigation.navigate('FriendsList');
          }}
          title="FriendsList"
        />
      </View>
      <View>
        <ChoiceButton />
      </View>
    </>
  );
}
