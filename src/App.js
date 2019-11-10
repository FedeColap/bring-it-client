import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './composition/Header/Header'
import WelcomeMessage from './routes/WelcomeMessage/WelcomeMessage'
import MoreInfo from './routes/MoreInfo/MoreInfo'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import LoginPage from './routes/LoginPage/LoginPage'
import SearchPage from './routes/SearchPage/SearchPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import './App.css'

class App extends Component {
  state = { error: null }
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <div className="spacer"></div>
        <main className='App'>
          <Switch>
              <Route
                exact
                path={'/'}
                component={WelcomeMessage}
              />
              <Route
                path={'/info'}
                component={MoreInfo}
              />
              <Route
                path={'/login'}
                component={LoginPage}
              />
              <Route
                path={'/register'}
                component={RegistrationPage}
              />
              <Route
                path={'/search'}
                component={SearchPage}
              />

              {/* <PublicOnlyRoute
                path={'/login'}
                component={LoginPage}
              />
              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationPage}
              />
              <PrivateRoute
                path={'/article/:articleId'}
                component={ArticlePage}
              /> */}
              <Route
                component={NotFoundPage}
              />
            </Switch>
        </main>
        <div className="spacer"></div>
        <footer>
          <p>2019 | Bring it (Please)</p>
        </footer>
      </div>
    )
  }
  
}

export default App;
