import TokenService from '../services/token-service'
import config from '../config'

const TripsApiService = {

  getTrips() {
    return fetch(`${config.API_ENDPOINT}/trips`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
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
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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
