import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
    const { password, student: studentData } = req.body;
    //data validation using Joi
    // const {error, value} = studentValidationSchema.validate(studentData)

    

    const result = await userServices.createStudentIntoDB(
      password,
      studentData,
    );

    sendResponse(res, {
      success: true,
      statusCode: 200,
      data: result,
      message: 'Student is created successfully',
    });
})

export const userControllers = {
  createStudent,
};
