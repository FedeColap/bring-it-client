import React from 'react'

//PRECEDENTE VERSIONE FUNZIONANTE
// export default React.createContext({
//     store : [],
//     isLogged: null,
//     loggingIn: () => {},
//     logginOut: () => {},
//     updateStore: () => {}
// })

const ApiContext = React.createContext({
    store: [],
    error: null,
    isLogged: null,
    loggingIn: () => {},
    logginOut: () => {},
    updateStore: () => {},
    addTrip: () => {},
  })
  export default ApiContext
  
  
  