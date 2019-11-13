import React from 'react'

export default React.createContext({
    store : [],
    isLogged: null,
    loggingIn: () => {},
    logginOut: () => {},
    updateStore: () => {}
})