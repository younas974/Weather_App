import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import '../node_modules/bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
