import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  TGuardian,
  TStudent,
  StudentModel,
  TUserName,
} from './student.interface';

// 2. Create a Schema corresponding to the document interface.
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (val: string) {
        const capitalized =
          val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        return val === capitalized;
      },
      message: '{VALUE} isnot in capitalized format',
    },
  },
  middleName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (val: string) => validator.isAlpha(val),
      message: '{VALUE} is not valid',
    },
  },
});

const gurdianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
    trim: true,
  },
  motherName: {
    type: String,
    required: true,
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: true,
    trim: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },
    name: {
      type: userNameSchema,
      required: [true, 'name is required'],
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'name is required'],
      unique: true,
      ref: 'User',
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: 'Gender can only be Male or Female',
      },
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
        message: '{VALUE} is not supported',
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (val: string) => validator.isEmail(val),
        message: '{VALUE} is not a valid email',
      },
    },
    dateOfBirth: { type: String },
    contactNo: { type: String },
    presentAddress: { type: String },
    profileImg: { type: String },
    guardian: {
      type: gurdianSchema,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

//virtual
studentSchema.virtual('fullName').get(function () {
  return (
    this.name.firstName + ' ' + this.name.middleName + ' ' + this.name.lastName
  );
});

//query middleware
studentSchema.pre('find', function (next) {
  // console.log(this)
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

//creating a custom static method
studentSchema.statics.doesUserExist = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// 3. Create a Model.
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
