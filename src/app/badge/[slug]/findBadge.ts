'use server';

import User from '@/app/models/User';
import { connectDB } from '@/lib/mongodb';

export async function getUser(url: string) {
  await connectDB();

  try {
    const userInfo = await User.findOne({ url }, { email: 0 }).lean();

    if (!userInfo) {
      return { error: 'User not found' };
    }

    return userInfo;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find user');
  }
}
