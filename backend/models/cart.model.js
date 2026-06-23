import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  product: {
    type: String,
  },
  quantity: {
    type: Number,
    required: [true, 'Cart quantity id is required'],
    min: [1, 'quantity must be at least 1'],
    max: [100, 'quantity cannot exceed 100'],
  },

  deliveryOptionId: {
    type: String,
    required: [true, 'Cart deliveryOptionId id is required'],
    validate: {
      validator: function (value) {
        return value.length === 1;
      },
      message: 'deliveryOptionId must be exactly 1 character',
    },
  },
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
