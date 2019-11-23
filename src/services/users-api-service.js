import TokenService from '../services/token-service'
import config from '../config'

const TripsApiService = {

  getTrips() {
    return fetch(`${config.API_ENDPOINT}/trips`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  //METTO COMMENTED OUT PERCHE' SULLA REPO DI COMPARAZIONE NON CI SONO RIFERMIENTI AGLI USER---------
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  //METTO COMMENTED OUT PERCHE' SULLA REPO DI COMPARAZIONE NON CI SONO RIFERMIENTI AGLI USER---------
  postUsers(first_name, last_name, user_name, email, password) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        user_name: user_name,
        email: email,
        password: password
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  postNewTrip( country, month) {
    return fetch(`${config.API_ENDPOINT}/trips`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ 
        country: country,
        month: month
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default TripsApiService
