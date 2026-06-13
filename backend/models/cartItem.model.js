import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: [true, 'CartItem quantity id is required'],
    min: [1, 'quantity must be at least 1'],
    max: [100, 'quantity cannot exceed 100'],
  },

  deliveryOptionId: {
    type: String,
    required: [true, 'CartItem deliveryOptionId id is required'],
    validate: {
      validator: function (value) {
        return value.length === 1;
      },
      message: 'deliveryOptionId must be exactly 1 character',
    },
  },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;
