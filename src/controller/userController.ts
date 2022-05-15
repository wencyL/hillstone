import UserService from '../service/userService';

export default class UserController {
  static async getUserList(ctx) {
    ctx.body = await UserService.getUserList();
  }
}