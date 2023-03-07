import { http, type LoginDataDto } from "shared/api"

interface IAuthService {
  login: (authForm: LoginDataDto) => Promise<LoginResponse | undefined>
  getMe: () => Promise<MeResponse | undefined>
}

export const authService: IAuthService = {
  login: async (authForm) => {
    try {
      return await http("login", {
        method: "POST",
        body: { ...authForm },
      })
    } catch (e) {}
  },

  getMe: async () => {
    try {
      return await http("me")
    } catch (e) {}
  },
}