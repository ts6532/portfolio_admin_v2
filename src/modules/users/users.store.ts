import { ref } from "vue"
import { defineStore } from "pinia"
import type {
  CreateUserDto,
  UpdateUserDto,
  UserDto,
} from "@modules/users/types/user"
import { usersService } from "@modules/users/users.service"

export const useUsersStore = defineStore("users", () => {
  const users = ref<UserDto[]>([])

  const loadUsers = async () => {
    const res = await usersService.getUsers()
    users.value = res ?? []
  }

  const createUser = async (form: CreateUserDto) => {
    const res = await usersService.createUser(form)

    if (res) users.value.push(res)
  }

  const updateUser = async (form: UpdateUserDto) => {
    const res = await usersService.updateUser(form)

    if (res) {
      let updatedUserIdx = users.value.findIndex((el) => el._id === res._id)

      if (updatedUserIdx > -1) users.value[updatedUserIdx] = { ...res }
    }
  }

  const deleteUser = async (_id: string) => {
    const res = await usersService.deleteUser(_id)

    if (res) {
      const deletedUserIdx = users.value.findIndex((el) => el._id === _id)

      if (deletedUserIdx > -1)
        users.value = users.value.slice(deletedUserIdx, 1)
    }
  }
  return { users, loadUsers, createUser, updateUser, deleteUser }
})
