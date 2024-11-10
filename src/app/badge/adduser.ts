'use server';

import { connectDB } from '@/lib/mongodb';
import User from '../models/User';

type UserData = {
  name: string;
  email: string;
  badge: {
    color: {
      color: string;
      shadow: string;
    };
    hat: string;
    accessory: string;
  };
  year: string;
  pronouns: string;
  link: string;
};

async function generateUniqueUrl(baseUrl: string): Promise<string> {
  let url = baseUrl;
  let counter = 1;
  let exists = await User.exists({ link: url });

  while (exists) {
    url = `${baseUrl}-${counter}`;
    counter += 1;
    // eslint-disable-next-line no-await-in-loop
    exists = await User.exists({ link: url });
  }

  return url;
}

export async function addUser(userData: UserData) {
  await connectDB();

  const [firstName, lastName] = userData.name.split(' ');
  const baseUrl = firstName[0].toLowerCase() + lastName.toLowerCase();

  try {
    const uniqueUrl = await generateUniqueUrl(baseUrl);

    const { email } = userData;

    await User.findOneAndUpdate(
      { email },
      {
        $set: userData,
        url: uniqueUrl
      },
      {
        new: true,
        upsert: true
      }
    );
  } catch (error) {
    // console.error('Error creating or updating user', error);
  }
}
