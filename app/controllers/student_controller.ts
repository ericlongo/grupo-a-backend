import type { HttpContext } from '@adonisjs/core/http'
import { StudentService } from '#services/student_service'
import { isDeclarationStatement } from 'typescript';

export default class StudentController {
    private studentService = new StudentService();

    async createStudent({ request, response }: HttpContext) {
        const { name, email, cpf } = request.only(['name', 'email', 'cpf']);

        if(name == null || email == null || cpf == null) {
            return response.abort('Favor preencher todos os campos.');
        }

        if(!this.studentService.validateEmail(email)) {
            return response.abort('E-mail inválido.');
        }

        const student = await this.studentService.createStudent(name, email, cpf);

        return response.ok({ student });
    }

    async listStudents({ response }: HttpContext) {
        const students = await this.studentService.listStudents();

        return response.ok({ students });
    }

    async updateStudent({ request, response }: HttpContext) {
        const { id, name, email } = request.only(['id', 'name', 'email']);

        if(id == null){
            return response.abort('Nenhum aluno informado.');
        }

        if(name == null || email == null) {
            return response.abort('Favor preencher todos os campos.');
        }

        const student = await this.studentService.updateStudent(id ,name, email);

        if(student == null) {
            return response.abort('Aluno não localizado.');
        }

        return response.ok({ student });
    }
}