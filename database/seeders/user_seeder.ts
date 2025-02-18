import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    const hashedPassword = await hash.make('123456')

    await User.create({
      name: 'Admin',
      email: 'admin@maisedu.com.br',
      password: hashedPassword, 
    })
  }
}