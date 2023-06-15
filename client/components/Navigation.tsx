import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAppDispatch, useAppSelector } from '../features/redux/hooks';

import Home from './screens/Home';
import Info from './screens/Info';
import Profile from './screens/Profile';
import Autorization from './screens/auth/Autorization';
import Login from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';
import Welcome from './screens/auth/Welcome';
import Categories from './screens/game/Categories';
import ChoiceRound from './screens/game/ChoiceRound';
import InputRound from './screens/game/InputRound';
import Lobby from './screens/game/Lobby';
import Result from './screens/game/Result';
import RightRound from './screens/game/RightRound';
import SelectRound from './screens/game/SelectRound';
import IntroHard from './screens/intro/IntroHard';
import IntroSimple from './screens/intro/IntroSimple';
import { Audio } from 'expo-av';
import { storeSound } from '../features/redux/slices/sound/soundSlice';
import { useEffect } from 'react';

const Stack = createStackNavigator();

export default function Navigation(): JSX.Element {
  const user = useAppSelector((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // gestureEnabled: false,
        }}
      >
        {user.status === 'fetching' ? (
          <>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="Autorization"
              component={Autorization}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="Info"
              component={Info}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />

            <Stack.Screen
              name="IntroSimple"
              component={IntroSimple}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="IntroHard"
              component={IntroHard}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />

            <Stack.Screen
              name="Categories"
              component={Categories}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="Lobby"
              component={Lobby}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="ChoiceRound"
              component={ChoiceRound}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="RightRound"
              component={RightRound}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="SelectRound"
              component={SelectRound}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="InputRound"
              component={InputRound}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{
                headerTitleStyle: {
                  fontFamily: 'Jingle',
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
