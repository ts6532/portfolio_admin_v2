import { CreatedUserDto } from "@modules/users/types/created-user.dto"

export class UserDto extends CreatedUserDto {
  _id: string

  constructor(data?: Partial<UserDto>) {
    super(data)
    if (data?._id) this._id = data._id
  }
}
