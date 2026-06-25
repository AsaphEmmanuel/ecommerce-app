import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: [true, 'Cart quantity is required'],
        min: [1, 'quantity must be at least 1'],
        max: [100, 'quantity cannot exceed 100'],
      },
      deliveryOptionId: {
        type: String,
        required: [true, 'Cart deliveryOptionId is required'],
        validate: {
          validator: function (value) {
            return value.length === 1;
          },
          message: 'deliveryOptionId must be exactly 1 character',
        },
      },
    },
  ],
}, {
  collection: 'cart'
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
