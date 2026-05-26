import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'Product id is required'],
      unique: [true, 'Same id already exists'],
    },

    image: {
      type: String,
      required: [true, 'Product image is required'],
    },

    name: {
      type: String,
      trim: true,
      required: [true, 'Product name is required'],
      minlength: [2, 'Product name must be at least 2 characters'],
      maxlength: [50, 'Product name cannot exceed 50 characters'],
    },

    rating: {
      stars: {
        type: Number,
        required: [true, 'Rating stars are required'],
        min: [0, 'Rating cannot be below 0'],
        max: [5, 'Rating cannot exceed 5'],
      },

      count: {
        type: Number,
        required: [true, 'Rating count is required'],
        min: [0, 'Rating count cannot be negative'],
      },
    },

    priceCents: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },

    keywords: {
      type: [String],
      default: [],
      validate: {
        validator: function (keywords) {
          return keywords.every((keyword) => keyword.length >= 2);
        },
        message: 'Each keyword must be at least 2 characters',
      },
    },
  },

  {
    timestamps: true,
  },
);

const Product = mongoose.model('Product', productSchema);

export default Product;
