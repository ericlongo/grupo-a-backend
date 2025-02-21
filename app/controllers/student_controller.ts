import type { HttpContext } from '@adonisjs/core/http'
import { StudentService } from '#services/student_service'

export default class StudentController {
    private studentService = new StudentService();

    async createStudent({ request, response }: HttpContext) {
        const { name, email, cpf } = request.only(['name', 'email', 'cpf']);

        if(name == null || email == null || cpf == null) {
            const data = {
                status: 422,
                message: 'Favor preencher todos os campos.'
            }
            return response.abort({ data });
        }

        if(!this.studentService.validateEmail(email)) {
            const data = {
                status: 422,
                message: 'E-mail inválido.'
            }
            return response.abort({ data });
        }

        const existsStudent = await this.studentService.findByCpf(cpf);
        if(existsStudent != null) {
            const data = {
                status: 422,
                message: 'CPF já cadastrado na base de alunos.'
            }
            return response.abort({ data });
        }

        const existsEmailStudent = await this.studentService.findByEmail(email);
        if(existsEmailStudent != null) {
            const data = {
                status: 422,
                message: 'Email já cadastrado na base de alunos.'
            }
            return response.abort({ data });
        }
        
        const existsEmailStudent = await this.studentService.findByEmail(email);
        if(existsEmailStudent != null) {
            const data = {
                status: 422,
                message: 'Email já cadastrado na base de alunos.'
            }
            return response.abort({ data });
        }

        const student = await this.studentService.createStudent(name, email, cpf);

        const data = {
            status: 200,
            message: 'Aluno cadastrado com sucesso.',
            student: student
        }

        return response.ok({ data });
    }

    async listStudents({ response }: HttpContext) {
        const students = await this.studentService.listStudents();
        console.log(students);

        return response.ok({ students });
    }

    async getStudentById({ request, response }: HttpContext) {
        const { id } = request.params();
        const student = await this.studentService.findById(id);

        if(student == null) {
            const data = {
                status: 422,
                message: 'Aluno não localizado.'
            }
            return response.abort({ data });
        }

        const data = {
            status: 200,
            message: 'Aluno atualizado com sucesso.',
            student: student
        }

        return response.ok({ data });
    }

    async updateStudent({ request, response }: HttpContext) {
        const { id, name, email } = request.only(['id', 'name', 'email']);

        if(id == null){
            const data = {
                status: 422,
                message: 'Nenhum aluno informado.'
            }
            return response.abort({ data });
        }

        if(name == null || email == null) {
            const data = {
                status: 422,
                message: 'Favor preencher todos os campos.'
            }
            return response.abort({ data });
        }

        const student = await this.studentService.updateStudent(id ,name, email);

        if(student == null) {
            const data = {
                status: 422,
                message: 'Aluno não localizado.'
            }
            return response.abort({ data });
        }

        const data = {
            status: 200,
            message: 'Aluno atualizado com sucesso.',
            student: student
        }

        return response.ok({ data });
    }

    async deleteStudent({ request, response }: HttpContext) {
        const { id } = request.only(['id']);

        if(id == null){
            const data = {
                status: 422,
                message: 'Nenhum aluno informado.'
            }
            return response.abort({ data });
        }

        const isDeletedStudent = await this.studentService.deleteStudent(id);

        if(!isDeletedStudent) {
            const data = {
                status: 422,
                message: 'Aluno não localizado.'
            }
            return response.abort({ data });
        }

        const data = {
            status: 200,
            message: 'Aluno deletado com sucesso.'
        }

        return response.ok({ data });
    }
}