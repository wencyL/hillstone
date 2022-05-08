import UserController from './controller/userController';

export default [
  {
    path: '/user',
    method: 'get',
    action: UserController.getUser
  }
];