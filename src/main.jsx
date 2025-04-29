
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./rishi.css";
import "./pet_webpage/pet.css"
import 'react-toastify/dist/ReactToastify.css';
// import UserContext from "./UserContext.jsx"
import LoginContext from './LoginContext.jsx';

import store from './store.jsx';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(

  // <UserContext> 
  // <LoginContext> <App /></LoginContext>
  <Provider store={store}>
    <App/>
  </Provider>
    
  
  // </UserContext>
   
)
