import Joi from 'Joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.pattern.base':
        'First name must start with an uppercase letter followed by lowercase letters.',
      'any.required': 'First name is required.',
    }),
  middleName: Joi.string().trim().required().messages({
    'any.required': 'Middle name is required.',
  }),
  lastName: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z]+$/)
    .messages({
      'string.pattern.base': 'Last name must contain only alphabets.',
      'any.required': 'Last name is required.',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'any.required': "Father's name is required.",
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'any.required': "Father's contact number is required.",
  }),
  motherName: Joi.string().trim().required().messages({
    'any.required': "Mother's name is required.",
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'any.required': "Mother's contact number is required.",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'ID is required.',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name object is required.',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': "Gender must be 'male' or 'female'.",
    'any.required': 'Gender is required.',
  }),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': "Status must be 'active' or 'blocked'.",
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-')
    .messages({
      'any.only': '{#value} is not a valid blood group.',
    }),
  email: Joi.string().email().required().messages({
    'string.email': '{#value} is not a valid email.',
    'any.required': 'Email is required.',
  }),
  dateOfBirth: Joi.string().optional(),
  contactNo: Joi.string().optional(),
  presentAddress: Joi.string().optional(),
  profileImg: Joi.string().optional(),
  isDeleted: Joi.boolean().default(false).optional(),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian object is required.',
  }),
});

export default studentValidationSchema;
