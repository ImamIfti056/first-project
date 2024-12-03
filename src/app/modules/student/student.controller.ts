import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      data: result,
      message: 'Student are retrieved successfully'
    })
  } catch (err) {
    next(err)
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentId = req.params.studentId;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      data: result,
      message: 'Student is retrieved successfully'
    })
  } catch (err) {
    next(err)
  }
};

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentId = req.params.studentId;
    const result = await studentServices.deleteStudentFromDB(studentId);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      data: result,
      message: 'Student deleted successfully'
    })
  } catch (err) {
    next(err)
  }
};

export const studentControllers = {
  getStudents,
  getSingleStudent,
  deleteStudent,
};
