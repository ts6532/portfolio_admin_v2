import { homeRoutes } from "./home/homeRoutes"
import { loginRoutes } from "./login/loginRoutes"

export const routes = [...loginRoutes, ...homeRoutes]
