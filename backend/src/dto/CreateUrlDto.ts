import { ApiProperty } from '@nestjs/swagger'

export class CreateUrlDto {
  @ApiProperty({
    description: 'cadastrar uma url',
    example: 'https://www.example.com.br',
  })
  url!: string
}
