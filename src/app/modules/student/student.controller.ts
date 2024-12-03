import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const getStudents = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: 'Student are retrieved successfully',
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  const result = await studentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: 'Student is retrieved successfully',
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  const result = await studentServices.deleteStudentFromDB(studentId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: 'Student deleted successfully',
  });
});

export const studentControllers = {
  getStudents,
  getSingleStudent,
  deleteStudent,
};
