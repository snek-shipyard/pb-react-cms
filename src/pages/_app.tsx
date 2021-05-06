// import {MDBBtn, MDBIcon} from 'mdb-react-ui-kit'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import {CMSMenuContainer as CMSMenu} from '@cms/containers/CMSMenu'
import {HomePageContainer as HomePage} from '@containers/HomePage'

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
        {/* <Route exact path="/pages/:pageId" component={WTPagesPage} /> */}
        {/* <Route exact path="/pages/:pageId/edit" component={WTPagePage} /> */}
      </Router>
      {/* <CMSMenu></CMSMenu> */}
      {/* <MDBBtn
        color="primary"
        className="cms-edit"
        size="lg"
        floating
        onClick={() => toggleMenu(true)}>
        <MDBIcon icon="magic" className="mr-1" />
      </MDBBtn> */}
      {/* <img
        className="btn btn-dark btn-lg btn-floating cms-edit"
        src="https://avatars.githubusercontent.com/u/55870326?s=200&v=4"
        data-mdb-toggle="popover"
        title="Edit with snek"
        onClick={() => toggleMenu(true)}></img> */}
    </div>
  )
}

export default App
