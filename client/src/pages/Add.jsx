import React from 'react'
import { Helmet } from 'react-helmet'
import { useFormik } from 'formik';
import { Validation } from '../validation/Validation';
import { Post } from '../api/request';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
const Add = () => {
  const navigate=useNavigate()
const handleSubmit=async(values,actions)=>{
  await Post(values)
 
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
  actions.resetForm()
  navigate('/cards')
}

  const formik = useFormik({
    initialValues: {
      name: "",
      parag: "",
      imageURL: "",
    },
    validationSchema:Validation,
    onSubmit:handleSubmit,
   } )

  return (
   <>
 <Helmet>
  <title>Add page</title>
  
  
  </Helmet>  
<form  onSubmit={formik.handleSubmit}>
<input onChange={formik.handleChange}
onBlur={formik.handleBlur}
name='name'
type='text'
placeholder='name'
value={formik.values.name}/>
{formik.errors.name && formik.touched.name &&(
  <span>{formik.errors.name}</span>
)}

<input onChange={formik.handleChange}
onBlur={formik.handleBlur}
name='parag'
type='text'
placeholder='parag'
value={formik.values.parag}/>
{formik.errors.parag && formik.touched.parag &&(
  <span>{formik.errors.parag}</span>
)}
<input onChange={formik.handleChange}
onBlur={formik.handleBlur}
name='imageURL'
type='url'
placeholder='imageURL'
value={formik.values.imageURL}/>
{formik.errors.imageURL && formik.touched.imageURL &&(
  <span>{formik.errors.imageURL}</span>
)}
<button   disabled={Object.keys(formik.errors).length !== 0 ? true : false} type="submit"> ADDD</button>
</form>







   </>
  )
}

export default Add