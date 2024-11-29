import { Schema, model } from 'mongoose';
import { Guardian, Student, UserName } from './student.interface';

// 2. Create a Schema corresponding to the document interface.
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const gurdianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  isActive: ['active', 'blocked'],
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  contactNo: { type: String },
  presentAddress: { type: String },
  profileImg: { type: String },
  guardian: gurdianSchema,
});

// 3. Create a Model.
export const StudentModel = model<Student>('Student', studentSchema);
