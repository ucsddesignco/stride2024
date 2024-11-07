import mongoose, { Schema, model } from 'mongoose';

export interface UserDocument {
  _id: string;
  email: string;
  name: string;
  pronouns: string;
  year: string;
  link: string;
  url: string;
  badge: {
    color: string;
    hat: string;
    accesstory: string;
  };
  createdAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      validate: {
        validator(v: string) {
          return /@ucsd\.edu$/.test(v);
        },
        message: 'Email must be a valid @ucsd.edu address'
      }
    },
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    year: {
      type: String,
      required: [true, 'Year is required']
    },
    pronouns: {
      type: String
    },
    link: {
      type: String
    },
    badge: {
      color: {
        color: String,
        shadow: String
      },
      hat: {
        type: String
      },
      accesstory: {
        type: String
      }
    },
    url: {
      type: String,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.models?.User || model<UserDocument>('User', UserSchema);
export default User;
