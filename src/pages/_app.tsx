import {BrowserRouter as Router, Route} from 'react-router-dom'

import {HomePageContainer as HomePage} from '@containers/HomePage'
import {ContactPageContainer as ContactPage} from '@containers/ContactPage'
import {FaqPageContainer as FaqPage} from '@containers/FaqPage'
import {GroupsPageContainer as GroupsPage} from '@containers/GroupsPage'
import {HowtoPageContainer as HowtoPage} from '@containers/HowtoPage'
import {RulesPageContainer as RulesPage} from '@containers/RulesPage'

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
        <Route
          exact
          path="/groups"
          render={props => <GroupsPage {...props} id={'8'} name={'StudyIndexPage'} />}
        />
        <Route
          exact
          path="/faq"
          render={props => <FaqPage {...props} id={'5'} name={'FaqPage'} />}
        />
        <Route
          exact
          path="/rules"
          render={props => <RulesPage {...props} id={'7'} name={'RulesPage'} />}
        />
        <Route
          exact
          path="/contact"
          render={props => <ContactPage {...props} id={'4'} name={'ContactPage'} />}
        />
        <Route
          exact
          path="/howto"
          render={props => <HowtoPage {...props} id={'6'} name={'HowtoPage'} />}
        />
      </Router>
    </div>
  )
}

export default App
