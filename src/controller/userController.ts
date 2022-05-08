import UserService from '../service/userService';

export default class UserController {
  static async getUser(ctx) {
    ctx.body = await UserService.getUser();
  }
}