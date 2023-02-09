export interface UserDto {
  _id: string

  password: string

  email: string

  role: string

  isActivated: boolean

  firstname: "string"
}

export interface CreateUserDto extends Omit<UserDto, "_id"> {}

export interface UpdateUserDto extends Omit<UserDto, "password"> {}

export interface UserItemDto extends Omit<UserDto, "password"> {}
