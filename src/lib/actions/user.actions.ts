'use server';

import User, { IUser } from '@/models/user.model';
import { connectToMongodb } from '../mongooes';
import { CreateVM } from '@/types/user';

export default async function createUser(params: CreateVM) {
  try {
    connectToMongodb();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
