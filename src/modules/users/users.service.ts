import type {
  CreateUserDto,
  UpdateUserDto,
  UserDto,
} from "@modules/users/types/user"
import { http } from "@modules/http/http"

export interface IUserService {
  getUsers: () => Promise<UserDto[] | undefined>

  createUser: (newUserModel: CreateUserDto) => Promise<UserDto | undefined>

  updateUser: (updateUserModel: UpdateUserDto) => Promise<UserDto | undefined>

  deleteUser: (_id: string) => Promise<boolean | undefined>
}

export const usersService: IUserService = {
  getUsers: async () => {
    try {
      return await http("users")
    } catch (e) {}
  },

  createUser: async (newUserForm) => {
    try {
      return await http("users", {
        method: "post",
        body: { ...newUserForm },
      })
    } catch (e) {}
  },

  updateUser: async (updateUserForm) => {
    try {
      return await http("users", {
        method: "put",
        body: { ...updateUserForm },
      })
    } catch (e) {}
  },

  deleteUser: async (_id) => {
    try {
      return http(`users/${_id}`, {
        method: "delete",
      })
    } catch (e) {}
  },
}
