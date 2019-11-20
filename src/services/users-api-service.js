// import TokenService from '../services/token-service'
import config from '../config'

const UsersApiService = {
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
  postUsers(first_name, last_name, user_name, email, password) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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
  postNewTrip( user_id, country, month) {
    return fetch(`${config.API_ENDPOINT}/trips`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        user_id: user_id,
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

export default UsersApiService
