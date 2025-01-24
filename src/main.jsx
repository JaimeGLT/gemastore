import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={'Loading'} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
