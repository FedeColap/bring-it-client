import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './composition/Header/Header'
import WelcomeMessage from './routes/WelcomeMessage/WelcomeMessage'
import MoreInfo from './routes/MoreInfo/MoreInfo'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import LoginPage from './routes/LoginPage/LoginPage'
import NewTripPage from './routes/NewTripPage/NewTripPage'
import SearchPage from './routes/SearchPage/SearchPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import ApiContext from './ApiContext';
import './App.css'
import './mainForm2.css'
import './slideshow.css'

class App extends Component {
 

  constructor(props) {
    super(props);
    this.state = { 
      store: this.props.files,
      error: null,
      isLogged: false, 

    }
    this.loggingIn = this.loggingIn.bind(this)
    this.logginOut = this.logginOut.bind(this)
    this.updateStore = this.updateStore.bind(this)
  }
  

  loggingIn () {
    console.log('loggingIn!')
    this.setState({
      isLogged: true
    })
    console.log(this.state.isLogged)
  }
  logginOut () {
    console.log('get outta here!')
    this.setState({
      isLogged: false
    })
    console.log(this.state.isLogged)
        
  }
  updateStore (username, newEmail, newCountry,newMonth) {
    const store = this.state.store
    console.log(store.length)
    console.log(username)
    console.log(newEmail)
    const newId = store.length + 2 ;
    console.log(newId)
    const newTrip = {
      id: newId,
      user_name: username,
      email: newEmail, 
      country: newCountry, 
      month: newMonth
    }
    console.log(newTrip)
    this.setState({
      store: [...this.state.store, newTrip ]
    })
  }

  render() {
    
    const value = {
      store: this.state.store,
      isLogged: this.state.isLogged,
      loggingIn: this.loggingIn,
      logginOut: this.logginOut,
      updateStore: this.updateStore,
    }
    return (
      <ApiContext.Provider value={value}>
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
                // component={LoginPage}
                render={(props) => <LoginPage {...props} />}
              />
              <Route
                path={'/register'}
                component={RegistrationPage}
              />
              <Route
                path={'/search'}
                render={(props) => <SearchPage {...props} />}
              />
              <Route
                path={'/newtrip'}
                component={NewTripPage}
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
          <h4 className="footer">2019 | Bring it (Please)</h4>
        </footer>
      </div>
      </ApiContext.Provider>
    )
  }
  
}

export default App;
