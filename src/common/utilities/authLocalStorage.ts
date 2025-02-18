export const authLocalStorage = {
  setAccessToken: (token: string) => {
    token = 'Bearer ' + token
    localStorage.setItem('JWT_ACCESS', token)
    return token
  },
  setRefreshToken: (token: string) => {
    token = 'Bearer ' + token
    localStorage.setItem('JWT_REFRESH', token)
    return token
  },
  getAccessToken: () => {
    return localStorage.getItem('JWT_ACCESS')
  },
  getRefreshToken: () => {
    return localStorage.getItem('JWT_REFRESH')
  },
  // @ts-ignore :RUSHING TO DEPLOYMENT
  setUserDataPayload: (userData) => {
    localStorage.setItem('CURRENT_USER', JSON.stringify(userData))
    return userData
  },
  getUserDataPayload: () => {
    const data = localStorage.getItem('CURRENT_USER')
    // @ts-ignore :RUSHING TO DEPLOYMENT
    return JSON.parse(data)
  },

  resetLocalStorage: () => {
    return localStorage.clear()
  }
}
