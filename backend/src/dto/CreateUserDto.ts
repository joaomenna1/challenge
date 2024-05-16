import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    description: 'nome',
    example: 'username',
  })
  name!: string

  @ApiProperty({
    description: 'email',
    example: 'example@email.com',
  })
  email!: string

  @ApiProperty({
    description: 'senha',
    example: 'password',
  })
  password!: string
}
