import axios from 'axios';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import store from './features/redux/store';
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
