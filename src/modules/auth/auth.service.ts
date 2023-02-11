import type { AuthForm } from "@modules/auth/types/AuthForm"
import type { LoginResponse } from "@modules/auth/types/LoginResponse"
import type { MeResponse } from "@modules/auth/types/MeResponse"
import { http } from "@modules/http/http"

interface IAuthService {
  login: (authForm: AuthForm) => Promise<LoginResponse | undefined>
  getMe: () => Promise<MeResponse | undefined>

  logout: () => Promise<boolean | undefined>
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

  logout: async () => {
    try {
      return await http("logout")
    } catch (e) {}
  },
}
