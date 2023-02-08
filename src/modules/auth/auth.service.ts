import type { AuthForm } from "@modules/auth/types/AuthForm"
import type { LoginResponse } from "@modules/auth/types/LoginResponse"
import type { MeResponse } from "@modules/auth/types/MeResponse"
import { http } from "@shared/http"

interface IAuthService {
  login: (authForm: AuthForm) => Promise<LoginResponse | undefined>
  getMe: () => Promise<MeResponse | undefined>

  logout: () => Promise<boolean | undefined>
}

export const authService: IAuthService = {
  login: async (authForm) => {
    try {
      console.log({ ...authForm })
      const res: LoginResponse = await http("login", {
        method: "POST",
        body: { ...authForm },
      })
      return res
    } catch (e) {}
  },

  getMe: async () => {
    try {
      const res: MeResponse = await http("me")
      return res
    } catch (e) {}
  },

  logout: async () => {
    try {
      const res = await http("logout")
      return res
    } catch (e) {}
  },
}
