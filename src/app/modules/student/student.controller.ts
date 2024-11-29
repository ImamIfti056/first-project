import { request, Request, Response } from "express"
import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try{
        const {student: studentData} = req.body;

        const result = await studentServices.createStudentIntoDB(studentData)

        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result
        })
    }catch(err){
        console.log(err)
    }
}

const getStudents = async(req: Request, res: Response) => {
    try{
        const result = await studentServices.getAllStudentsFromDB()
        res.status(200).json({
            success: true,
            message: 'Students are retieved successfully',
            data: result
        })
    }catch(err){
        console.log(err)
    }
}

export const studentControllers = {
    createStudent,
    getStudents,
}