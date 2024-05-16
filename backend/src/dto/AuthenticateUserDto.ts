import { ApiProperty } from '@nestjs/swagger'

export class AuthenticateUserDto {
  @ApiProperty({
    description: 'insira o username',
    example: 'example@gmail.com',
  })
  username!: string

  @ApiProperty({
    description: 'insira a senha',
    example: '*****',
  })
  password!: string
}
