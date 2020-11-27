import mongoose from 'mongoose';

export interface IUserDto {
  id?: string;
  full_name: string;
  email: string;
  password: string;
  isStaff?: boolean;
  isActive?: boolean;
}

export interface UserDoc extends mongoose.Document {
  full_name: string;
  email: string;
  password: string;
  isStaff?: boolean;
  isActive?: boolean;
}

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      lowercase: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  },
);

export const User = mongoose.model<UserDoc>('Users', userSchema);
