import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../features/redux/hooks';
import { socketInit } from '../features/ws/wsActions';

import { checkUserThunk } from '../features/redux/slices/user/userThunk';
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
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Autorization" component={Autorization} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="Profile" component={Profile} />

            <Stack.Screen name="IntroSimple" component={IntroSimple} />
            <Stack.Screen name="IntroHard" component={IntroHard} />

            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Lobby" component={Lobby} />
            <Stack.Screen name="ChoiceRound" component={ChoiceRound} />
            <Stack.Screen name="RightRound" component={RightRound} />
            <Stack.Screen name="SelectRound" component={SelectRound} />
            <Stack.Screen name="InputRound" component={InputRound} />
            <Stack.Screen name="Result" component={Result} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
