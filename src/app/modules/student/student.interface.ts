// 1. Create an interface representing a document in MongoDB.
export type Guardian = {
  fatherName: string;
  fatherContactNo: string;
  motherName: string;
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: UserName;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  contactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  presentAddress: string;
  guardian: Guardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
