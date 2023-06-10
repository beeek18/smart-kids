import { Button, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { useEffect } from 'react';
import { checkUserThunk } from '../../features/redux/slices/user/userThunk';

export default function FriendsList({ navigation }): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkUserThunk);
  }, []);

  const user = useAppSelector((store) => store.user);

  console.log(user);
  return (
    <View>
      <Text>Friends</Text>
      <Button title="IntroRound" onPress={() => navigation.navigate('IntroRound')} />
    </View>
  );
}
