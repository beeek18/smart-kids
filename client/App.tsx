import axios from 'axios';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import store from './features/redux/store';

axios.defaults.withCredentials = true;

export default function App() {
  const [loaded] = useFonts({
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
