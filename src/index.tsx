import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store, PersistGate, persistor} from '@store/store'

import {CMSWrapper} from './cms'
import App from './pages/_app'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <CMSWrapper>
          <App />
        </CMSWrapper>
      </PersistGate>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
)
