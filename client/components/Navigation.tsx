import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Autorization from './screens/Autorization';
import Categories from './screens/Categories';
import FriendsList from './screens/FriendsList';
import HardRound from './screens/HardRound';
import HardTwoRound from './screens/HardTwoRound';
import Home from './screens/Home';
import Info from './screens/Info';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Result from './screens/Result';
import SignUp from './screens/SignUp';
import SimpleRound from './screens/SimpleRound';
import Welcome from './screens/Welcome';
import { useAppDispatch, useAppSelector } from '../features/redux/hooks';
import { useEffect } from 'react';
import { socketInit } from '../features/ws/wsActions';

const Stack = createStackNavigator();

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    if (user && user.token) dispatch(socketInit(user.token));
  }, [user.id]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Autorization" component={Autorization} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="FriendsList" component={FriendsList} />
        <Stack.Screen name="SimpleRound" component={SimpleRound} />
        <Stack.Screen name="HardRound" component={HardRound} />
        <Stack.Screen name="HardTwoRound" component={HardTwoRound} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
