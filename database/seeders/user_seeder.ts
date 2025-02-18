import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    const usersData = [
      {
        email: 'admin@maisedu.com.br',
        password: '123456', 
      }
    ]

    for (const userData of usersData) {
      const hashedPassword = await hash.make(userData.password)

      await User.create({
        email: userData.email,
        password: hashedPassword, 
      })
    }
  }
}