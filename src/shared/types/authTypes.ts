export type JwtType = {
  access: string,
  refresh: string
}

export type signUpType = {
  username: string,
  password: string,
  email: string,
  nickname: string,
  phone: string,
  cityId: string
  name: string,
  surname: string
}

export type signInType = {
  username: string,
  password: string
}

export type RefreshType = {
  refresh: string
}

export type ChangePasswordType = {
  oldPassword: string,
  newPassword: string
}