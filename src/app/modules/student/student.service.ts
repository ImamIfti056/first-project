import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  //built in static method

  if (await Student.doesUserExist(studentData.id)) {
    throw new Error('student alredy exists');
  }
  const result = await Student.create(studentData);
  // const student = new Student(studentData) //create an instance

  // if(await student.doesUserExist(studentData.id)){
  //     throw new Error('student already exists')
  // }

  // const result = await student.save() //built in instance method
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
