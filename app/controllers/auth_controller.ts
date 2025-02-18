import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async login({ request, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])

        const user = await User.findBy('email', email)
    
        if (!user) {
          return response.abort('Usuário não localizado.')
        }
    
        const isPasswordValid = await hash.verify(user.password, password)
    
        if (!isPasswordValid) {
          return response.abort('Senha inválida.')
        }
    
        return response.ok({user})
      }
}