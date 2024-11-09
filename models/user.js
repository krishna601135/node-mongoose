import mongoose from 'mongoose';
const {Schema, model} =  mongoose;


const userSchema = new Schema({
 name: {
   type: String,
   required: true
 },
 email: {
   type: String,
   lowercase: true,
   required: true,
   minLength: 10
 }
});

const User = model('User', userSchema);

export default User;
