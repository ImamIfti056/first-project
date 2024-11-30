import { z } from 'zod';

// UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty("First name is required.")
    .refine(
      (val) => /^[A-Z][a-z]*$/.test(val),
      "First name must start with an uppercase letter followed by lowercase letters."
    ),
  middleName: z.string().trim().nonempty("Middle name is required."),
  lastName: z
    .string()
    .trim()
    .nonempty("Last name is required.")
    .refine(
      (val) => /^[A-Za-z]+$/.test(val),
      "Last name must contain only alphabets."
    ),
});

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().trim().nonempty("Father's name is required."),
  fatherContactNo: z.string().trim().nonempty("Father's contact number is required."),
  motherName: z.string().trim().nonempty("Mother's name is required."),
  motherContactNo: z.string().trim().nonempty("Mother's contact number is required."),
});

// Main Student schema
const studentValidationSchema = z.object({
  id: z.string().nonempty("ID is required."),
  name: userNameValidationSchema,
  gender: z
    .enum(["male", "female"], {
      errorMap: () => ({ message: "Gender must be 'male' or 'female'." }),
    }),
  isActive: z
    .enum(["active", "blocked"], {
      errorMap: () => ({ message: "Status must be 'active' or 'blocked'." }),
    })
    .default("active"),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-"], {
      errorMap: () => ({ message: "{VALUE} is not a valid blood group." }),
    }),
  email: z
    .string()
    .email("Email is not valid.")
    .nonempty("Email is required."),
  dateOfBirth: z.string().optional(),
  contactNo: z.string().optional(),
  presentAddress: z.string().optional(),
  profileImg: z.string().optional(),
  guardian: guardianValidationSchema,
});

export default studentValidationSchema;
