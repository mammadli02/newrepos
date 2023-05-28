// import React, { useEffect, useState } from 'react'
// import { GetById, Putt } from '../api/request'
// import { useNavigate, useParams } from 'react-router-dom'
// import { Button, TextField } from '@mui/material'
// import { useFormik } from "formik";
// import { Helmet } from 'react-helmet'
// const Edit = () => {
//   const [cards, setCards]=useState()
//   console.log(cards);
//   const {id}=useParams()
//   const navigate=useNavigate()
//   const [card, setCard]=useState({})
//   const [loadinf, setLoading]=useState(true)
//   useEffect(()=>{
//     GetById(id).then((res)=>{
//       console.log(res);
//       setCard(res)
//       formik.values.name=res.name,
//       formik.values.parag=res.parag,
//       formik.values.imageURL=res.imageURL
//       setLoading(false)
//     })
//   }, [id])
//   const handlEdit=async(values,actions)=>{
//     setCards(values)
//     await Putt(id,values)
//     navigate('/cards')
//     actions.resetForm()
//   }
// const formik=useFormik({
// initialValues:{
//   name:card.name,
//   parag:card.parag,
//   imageURL:card.imageURL

// },
// onSubmit:handlEdit
// })
//   return (
//     <>
//       <Helmet>
                     
//                      <title>Edit page</title>
//                  </Helmet>
//     {loadinf ? <div>loading ...</div> : <form onSubmit={formik.handleSubmit}>
//     <TextField type='text' name='name' placeholder='name' value={formik.values.name} onChange={formik.handleChange}
//     onBlur={formik.handleBlur}/>
//       <TextField type='text' name='parag' placeholder='paragraph' value={formik.values.parag} onChange={formik.handleChange}
//     onBlur={formik.handleBlur}/>
//       <TextField type='text' name='imageURL' placeholder='imageURL' value={formik.values.imageURL} onChange={formik.handleChange}
//     onBlur={formik.handleBlur}/>
//     <Button type='submit'  variant='contained'>  EDIT </Button>

//     </form> }
//            </>
//   )
// }

// export default Edit