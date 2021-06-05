import {BrowserRouter as Router, Route} from 'react-router-dom'

import {HomePageContainer as HomePage} from '@containers/HomePage'
import {ContactPageContainer as ContactPage} from '@containers/ContactPage'
import {FaqPageContainer as FaqPage} from '@containers/FaqPage'
import {StudyPageContainer as StudyPage} from '@containers/StudyPage'
import {StudyIndexPageContainer as StudyIndexPage} from '@containers/StudyIndexPage'
import {HowtoPageContainer as HowtoPage} from '@containers/HowtoPage'
import {RulesPageContainer as RulesPage} from '@containers/RulesPage'
import {Navbar, Footer} from '@components/organisms'

import '@common/css/colors.scss'
import '@common/css/variables.scss'
import '@common/css/layout.scss'

import './_app.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route
          exact
          path="/"
          render={props => <HomePage {...props} id={'3'} name={'HomePage'} />}
        />
        <Route
          exact
          path="/groups"
          render={props => <StudyIndexPage {...props} id={'8'} name={'StudyIndexPage'} />}
        />
        <Route
          exact
          path="/groups/:studyPageId"
          render={props => <StudyPage {...props} id={props.match.params.studyPageId} name={'StudyPage'} />}
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
      <Footer
        copyrightText={'CC'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </div>
  )
}

export default App
