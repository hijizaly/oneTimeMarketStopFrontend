export type LogInCredentialType = {
    email: string
    password: string
}


export type signUpType = {

}

export type TokenPayloadType = {
    sub: number
    businessTinNumber?: string
    email?: string
    name: string
    role: User_role
}

export type User_role = 'USER'
