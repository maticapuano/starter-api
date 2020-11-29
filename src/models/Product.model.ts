import mongoose from 'mongoose';

export interface IProductDto {
  id?: string;
  name: string;
  description: string;
  price: number;
  stock?: number;
  userId: string;
  isActive?: boolean;
}

export interface ProductDoc extends mongoose.Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  userId: string;
  isActive?: boolean;
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: true,
    },
    description: {
      type: String,
      lowercase: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: false,
      default: 0,
    },
    userId: {
      type: String,
      required: true,
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

export const Product = mongoose.model<ProductDoc>(
  'Products',
  productSchema,
);
