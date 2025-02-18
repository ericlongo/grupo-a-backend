import { BaseSeeder } from '@adonisjs/lucid/seeders'
import UsersProfile from '#models/users_profile'

export default class extends BaseSeeder {
  async run() {
    await UsersProfile.create({
      userId: 1,
      profileId: 1 
    })
  }
}