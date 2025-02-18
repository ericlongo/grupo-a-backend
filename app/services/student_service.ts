import Student from "#models/student"

export class StudentService {
  public async listStudents(): Promise<Student[]> {
    const students = await Student.all();
    return students;
  }

  public async createStudent(name: string, email: string, cpf: string): Promise<Student> {
    const ra = await this.generateRa();
    const student = await Student.create({ name, email, ra, cpf });
    return student;
  }

  async updateStudent(id: number, name: string, email: string): Promise<Student | null> {

        const student = await Student.findBy('id', id);

        if(student != null) {
          student.name = name;
          student.email = email;
  
          await student.save();
        }
        
        return student;
    }

  public async findByRa(ra: string): Promise<Student | null> {
    const student = await Student.findBy('ra', ra);
    return student;
  }

  private async generateRa(): Promise<string> {
      const ra =  Math.floor(100000 + Math.random() * 900000).toString();
      const student = await this.findByRa(ra);
      if(student != null) {
          this.generateRa();
      }

      return ra.toString();
  }

  public validateCpf(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '')

    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i)
    }
    let remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cpf.charAt(9))) return false

    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i)
    }
    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cpf.charAt(10))) return false

    return true
  }

  public validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }
}