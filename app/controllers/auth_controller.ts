import { UserService } from '#services/user_service'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  private userService = new UserService()

    async login({ request, auth, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password']);

        const user = await this.userService.findByEmail(email);
    
        if (!user) {
          return response.abort('Usuário não localizado.');
        }
    
        const isPasswordValid = await this.userService.isPasswordValid(user, password);
    
        if (!isPasswordValid) {
          return response.abort('Senha inválida.');
        }
    
        // const token = await auth.use('web').attempt(email, password);
        // return response.json({ token });
        return response.ok({user});
      }
}