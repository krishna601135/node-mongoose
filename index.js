import mongoose from 'mongoose';
import Blog from './models/blog.js';
import User from './models/user.js';

const initializeDb = async () => {
  try{
   await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase2");
   console.log('Successfully Connected to Db.');
  }
  catch(error){
   console.log(error.message);
   process.exit(1);
  }
}

initializeDb();

const run = async () => {

//const user = await User.create({
//	name: 'Mohan',
//	email: 'mohankrishna@gmail.com'
//});

//const article = await Blog.create({
// title: 'Awesome Post4',
// slug: 'Awsome-Post4',
// author: user.id,
// published: true,
// content: 'super  post ever',
// tags: ['featured'],
//})
//await article.save();
//const article = await Blog.find().where('author').equals('Jesse Hall').select('title slug author -_id')
//const article = await Blog.findOne({title:'Awesome Post3'})
const article = await Blog.findOne({title: 'Awesome Post4'}).populate('author');
console.log(article);
}


run()






