import { Model } from "mongoose";

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
  name: TUserName;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  contactNo?: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  presentAddress?: string;
  guardian: TGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};

export type StudentMethods = {
  doesUserExist(id: string): Promise<TStudent | null>
}

export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>;