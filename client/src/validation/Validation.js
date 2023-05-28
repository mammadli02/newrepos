import * as yup from 'yup';
export const Validation = yup.object().shape({
   name:yup.string().required('name is required'),
   age:yup.number().min(1).max(5).required('age is required'),
   imageURL:yup.string().required('image is required'),
  });