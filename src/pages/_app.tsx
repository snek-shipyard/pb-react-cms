import {BrowserRouter as Router, Route} from 'react-router-dom'

import {HomePageContainer as HomePage} from '@containers/HomePage'

import '@common/css/colors.scss'
import '@common/css/variables.scss'
import '@common/css/layout.scss'

import './_app.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={props => <HomePage {...props} id={'3'} name={'HomePage'} />}
        />
      </Router>
    </div>
  )
}

export default App
