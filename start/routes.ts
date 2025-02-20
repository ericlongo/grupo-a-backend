/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
});

const AuthController = () => import('#controllers/auth_controller');
router.post('login', [AuthController, 'login']);

const StudentController = () => import('#controllers/student_controller');
router.get('students', [StudentController, 'listStudents']);
router.get('student/:id', [StudentController, 'getStudentById']);
router.post('student/create', [StudentController, 'createStudent']);
router.post('student/update', [StudentController, 'updateStudent']);
router.post('student/delete', [StudentController, 'deleteStudent']);