import { UserService } from '#services/user_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  private userService = new UserService()

    async login({ request, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password']);

        const user = await this.userService.findByEmail(email);
    
        if (!user) {
          const data = {
              status: 422,
              message: 'Usuário não localizado.'
          }
          return response.abort({ data });
        }
    
        const isPasswordValid = await this.userService.isPasswordValid(user, password);
    
        if (!isPasswordValid) {
          const data = {
              status: 422,
              message: 'Senha inválida.'
          }
          return response.abort({ data });
        }

        const data = {
            status: 200,
            message: 'Login realizado.',
            user: user
        }

        return response.ok({ data });
      }
}