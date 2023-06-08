import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './screens/Categories';
import FriendsList from './screens/FriendsList';
import Autorization from './screens/Autorization';
import Welcome from './screens/Welcome';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';
import Info from './screens/Info';
import Profile from './screens/Profile';
import SimpleRound from './screens/SimpleRound';
import HardRound from './screens/HardRound';
import Result from './screens/Result';

const Stack = createStackNavigator();

export default function Navigation(): JSX.Element {
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
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
