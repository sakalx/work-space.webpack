import axios from 'axios';

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function fakeFetch() {
  return {
    type: 'FAKE_FETCH',
    payload: {
      name: 'Erick',
      age: 12,
    }
  }
}

export function fetchUser() {
  return {
    type: 'FETCH_USERS',
    payload: axios.get('https://jsonplaceholder.typicode.com/users/')
  }
}

