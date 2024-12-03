import { Model, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type TGuardian = {
  fatherName: string;
  fatherContactNo: string;
  motherName: string;
  motherContactNo: string;
};

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  contactNo?: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  presentAddress?: string;
  guardian: TGuardian;
  profileImg?: string;
  isDeleted?: boolean;
};

//for creating static
export interface StudentModel extends Model<TStudent> {
  doesUserExist(id: string): Promise<TStudent | null>;
}

//for creating instance
// export type StudentMethods = {
//   doesUserExist(id: string): Promise<TStudent | null>
// }

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>;
