export interface User {
  _id: string

  password: string

  email: string

  role: string

  firstname?: string
}

export interface CreateUserDto extends Omit<User, "_id"> {}

export interface UpdateUserDto extends Omit<User, "password"> {}

export interface UserDto extends Omit<User, "password"> {}
