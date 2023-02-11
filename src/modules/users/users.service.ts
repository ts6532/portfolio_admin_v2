import type {
  CreateUserDto,
  UpdateUserDto,
  UserItemDto,
} from "@modules/users/types/user.dto"
import { http } from "@modules/http/http"

export interface IUserService {
  getUsers: () => Promise<UserItemDto[] | undefined>

  createUser: (newUserModel: CreateUserDto) => Promise<UserItemDto | undefined>

  updateUser: (
    updateUserModel: UpdateUserDto,
  ) => Promise<UserItemDto | undefined>

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
      return http(`users/${_id}`)
    } catch (e) {}
  },
}
