import axios from 'axios';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import store from './features/redux/store';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

axios.defaults.withCredentials = true;

export default function App() {
  const [loaded] = useFonts({
    Caveat: require('./assets/fonts/Caveat-SemiBold.ttf'),
    Jingle: require('./assets/fonts/Jingleberry.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
