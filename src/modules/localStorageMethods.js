export function addUserToLS(userInfo) {
  localStorage.setItem('user', JSON.stringify(userInfo))
}

export function getUserFromLS() {
  const user = JSON.parse(localStorage.getItem('user'))

  return user
}
