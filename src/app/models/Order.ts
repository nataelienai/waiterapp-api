import { model, Schema } from 'mongoose';

import { Product } from './Product';

export const Order = model(
  'Order',
  new Schema({
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
      default: 'WAITING',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      type: [
        {
          product: {
            type: String,
            ref: Product.modelName,
            required: true,
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
      required: true,
    },
  }),
);
