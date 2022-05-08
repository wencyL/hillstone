import { Context } from 'koa';
import { getManager } from 'typeorm';
import User from '../entity/user';

export default class UserService {
  static async getUser(context?: Context) {
    const userRepository = getManager().getRepository(User);
    const newUser = userRepository.create({
      name: 'lucy',
      age: 25,
      introduce: "a good girl"
    });

    await userRepository.save(newUser);

    return newUser;
  }
}