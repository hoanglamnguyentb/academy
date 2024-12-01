'use server';
import { error } from 'console';
import mongoose from 'mongoose';
let isConnected: boolean = false;
export const connectToMongodb = async () => {
  if (!process.env.MONGODB) {
    throw new Error('string connection is wrong');
  }
  if (isConnected) {
    console.log('is connected');
  }
  try {
    await mongoose.connect(process.env.MONGODB, {
      dbName: 'academy',
    });
    isConnected = true;
    console.log('connected successfull');
  } catch (error) {
    console.log('🚀 ~ connectToMongodb ~ error:', error);
  }
};
