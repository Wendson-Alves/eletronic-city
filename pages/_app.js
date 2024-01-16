import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../styles/globals.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import store from '@/redux/store';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}