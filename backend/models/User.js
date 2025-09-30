import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  addressLine1: { type: String },
  addressLine2: { type: String },
  city: { type: String },
  postalCode: { type: String },
}, { timestamps: true });

export default mongoose.model('User', userSchema);