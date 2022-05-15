import { Context } from 'koa';
import { getManager } from 'typeorm';
import User from '../entity/user';

export default class UserService {
  static async getUserList(context?: Context) {
    const userRepository = getManager().getRepository(User);
    const userList = await userRepository.find();

    return userList;
  }
}