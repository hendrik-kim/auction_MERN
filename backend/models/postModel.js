import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    postItems: [
      {
        name: { type: String, required: false },
        qty: { type: Number, required: false },
        image: { type: String, required: false },
        price: { type: Number, required: false },
        brand: {
          type: String,
          required: false,
        },
        category: {
          type: String,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
        countInStock: {
          type: Number,
          required: false,
          default: 0,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: 'Product',
        },
      },
    ],
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
