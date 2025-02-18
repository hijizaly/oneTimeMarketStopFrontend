import {axiosRequest} from "../../../common/utilities/axios-utils.ts";
import {LogInCredentialType} from "../../../common/types/auth.type.ts";
import { useMutation } from 'react-query'


export const loginRequest = async (loginCredential: LogInCredentialType) => {
    return axiosRequest({ url: '/user/signIn', method: 'post', data: loginCredential })
}
export const useAuthentication = () => {
    return useMutation(loginRequest)
}

export const logoutRequest = async () => {
    return axiosRequest({ url: '/user/logout', method: 'post' })
}