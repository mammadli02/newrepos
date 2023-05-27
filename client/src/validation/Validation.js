import * as yup from 'yup';
export const ValidationSchema = yup.object().shape({
   name:yup.string().required('name is required'),
   age:yup.number().min(1).max(5).required('age is required')
  });