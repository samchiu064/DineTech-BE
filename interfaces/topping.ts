import { Document } from 'mongoose';

interface ITopping extends Document {
  name: string;
  price: number;
  category: string;
  stock: number;
}

export { ITopping };