import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { password, student: studentData } = req.body;
      //data validation using Joi
      // const {error, value} = studentValidationSchema.validate(studentData)
  
      //validation using zod
    //   const zodParsedData = UserValidation.userValidationSchema.parse(studentData);
  
      const result = await userServices.createStudentIntoDB(password, studentData);
  
      sendResponse(res, {
        success: true,
        statusCode: 200,
        data: result,
        message: 'Student is created successfully'
      })
    } catch (err: any) {
      next(err)
    }
  };

export const userControllers = {
    createStudent,
}