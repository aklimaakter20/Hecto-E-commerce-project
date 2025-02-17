import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App.jsx'
import { ContextApi } from './Components/ContextApi.jsx';
import firebaseConfig from './pages/firebase.config.js';
import store from './store.js';
import { Provider } from 'react-redux';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ContextApi>
    <App/>
    </ContextApi>
    </Provider>


  </StrictMode>,
)
