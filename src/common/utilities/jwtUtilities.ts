import {TokenPayloadType} from "../types/auth.type.ts";

export const isJwtExpired = (token: string | null): boolean => {
  try {
    if (token === null) {
      return true
    } else {
      const decodedJwt = JSON.parse(atob(token.split('.')[1]))
      return decodedJwt.exp * 1000 < Date.now()
    }
  } catch (e) {
    return true
  }
}

export const isJwtCorrectRole = (token: string): boolean => {
  try {
    const decodedJwt = JSON.parse(atob(token.split('.')[1]))
    return decodedJwt.role
  } catch (e) {
    return false
  }
}

export const nativeJwtDecoder = (token: string | null): TokenPayloadType | null => {
  try {
    if (token === null) {
      return null
    } else {
      return JSON.parse(atob(token.split('.')[1]))
    }
  } catch (e) {
    return null
  }
}
