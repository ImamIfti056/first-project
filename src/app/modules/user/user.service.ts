import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  //if password isnot given, use default
  userData.password = password || config.default_password;
  //set student role
  userData.role = 'student';
  //manually generated id
  userData.id = '2030100001';

  const newUser = await User.create(userData);
  //create a student
  if (Object.keys(newUser).length) {
    //set id, _id
    studentData.id = newUser.id; // embedding id
    studentData.user = newUser._id; // reference id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
