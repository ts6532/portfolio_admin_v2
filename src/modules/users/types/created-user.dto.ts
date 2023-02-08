export class CreatedUserDto {
  email: string

  role: string

  isActivated: boolean

  firstname: string

  constructor(data?: Partial<CreatedUserDto>) {
    if (data) Object.assign(this, data)
  }
}
