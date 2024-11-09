import mongoose from 'mongoose';
import User from './user.js';
const {Schema, SchemaTypes,  model} = mongoose;


const blogSchema = new Schema({
  title: {
   type: String,
   required: true
  },
  slug: {
   type: String,
   required: true,
   lowercase: true
  },
  published: {
   type: Boolean,
   default: false
  },
  author: {
   type: SchemaTypes.ObjectId,
   required: true,
   ref: 'User'
  },
  content: {
   type: String
  },
  tags: [String],
  createdAt: {
   type: Date,
   default: () => Date.now(),
   immutable: true
  },
  updatedDate: {
   type: Date,
  },
  comments: [{
   user: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true
   },
   content: String,
   votes: Number,
  }]
})

blogSchema.pre('save', function(next) {
 this.updatedAt = Date.now();
 next();
});

const Blog = model('Blog', blogSchema);
export default Blog;
