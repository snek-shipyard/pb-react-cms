import {CMSWrapper} from 'jaen-cms/lib/index'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store, PersistGate, persistor} from '@store/store'

import App from './pages/_app'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <CMSWrapper bifrostUrls={{httpUrl: 'http://localhost:8000/graphql'}}>
          <App />
        </CMSWrapper>
      </PersistGate>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
)
