import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  deliveryOptionId: {
    type: String,
    required: true,
  },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;
