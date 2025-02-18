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
router.post('students/create', [StudentController, 'createStudent']);
router.get('students', [StudentController, 'listStudents']);
router.post('students/edit', [StudentController, 'updateStudent']);