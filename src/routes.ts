import UserController from './controller/userController';

export default [
  {
    path: '/userList',
    method: 'get',
    action: UserController.getUserList
  }
];