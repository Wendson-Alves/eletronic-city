import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../styles/globals.scss'
import store from '@/redux/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}