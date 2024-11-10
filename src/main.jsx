import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import firebaseConfig from './DataBase/FireBaseConfig.jsx'
import { Provider } from 'react-redux'
import store from './fueature/Stroge.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <React.StrictMode>
    <App />
    </React.StrictMode>
    
  </Provider>
)
