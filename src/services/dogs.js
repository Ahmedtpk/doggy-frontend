const API_URL = process.env.REACT_APP_API_URL;

export function getUsers() {
  return fetch(`${API_URL}/users`)
  .then((response) =>  {
     response.json()
    })
  .then((data) => {
    return data;
  })
}

export function getUsersById(userid) {
  return fetch(`${API_URL}/users/${userid}`)
  .then((response) =>  {
     response.json()
    })
  .then((data) => {
    return data;
  })
}

// export function getMatches () {
//   return
// }