import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import {toast} from 'react-toastify'

export default function Contact() {
  const sendEmail = async(values)=>{
    try {
      await axios.post(`http://localhost:3001/contact`,{values})
      toast.success('Successfully Send Email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
    } catch (error) {
      console.log(error);
    }
  }
  const formik = useFormik({
    initialValues: {
      subject: '',
      content: '',
      email: '',
    },
    validationSchema: Yup.object({
      subject: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      content: Yup.string().required('Required'),
      email: Yup.string().email('Must be valid Email').required('Required'),
    }),
    onSubmit: async(values,{resetForm}) => {
      await sendEmail(values);
      resetForm();
    },
  });
  return (
    <div className="row mt-4">
      <div className="col-lg-6 mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className='form-label' htmlFor="subject">Subject</label>
          <input className='form-control' id="subject" type="text" {...formik.getFieldProps('subject')} />
          {formik.touched.subject && formik.errors.subject ? 
          (
            <Alert className="mt-3" variant={`danger`}>
              {formik.errors.subject}
            </Alert>
        ) : null}
        </div>

        <div className="mb-3">
          <label className='form-label' htmlFor="content">Content</label>
          <input className='form-control' id="content" type="text" {...formik.getFieldProps('content')} />
          {formik.touched.content && formik.errors.content ? ( <Alert className="mt-3" variant={`danger`}>
              {formik.errors.content}
            </Alert>) : null}
        </div>

        <div className="mb-3">
          <label className='form-label' htmlFor="email">Email</label>
          <input className='form-control' id="email" type="text" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
             <Alert className="mt-3" variant={`danger`}>
             {formik.errors.email}
           </Alert>
            ) : null}
        </div>
         <button className='btn btn-primary' type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}
