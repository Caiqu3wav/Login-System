'use client';

import * as React from 'react'
import Image from 'next/image'
import './pageStyle.css'
import { Formik, Form, Field, ErrorMessage, FormikHelpers,
  FormikProps, FieldProps } from 'formik'
import * as yup from 'yup'


export default function Home() {
  const handleClickLogin = (values: any) => console.log(values);
  const handleClickCad = (values: any) => console.log(values);

  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório"),
  });

  const validationCad = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), undefined], "As senhas não coincidem"),
  });

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
        <Form className='login-form'>
          <div className='login-form-group'>
            <Field name='email' className='form-field' placeholder='Email' />
            <ErrorMessage component='span' name='email' className='form-error' />
          </div>

          <div className='login-form-group'>
            <Field name='password' className='form-field' placeholder='Senha' />
            <ErrorMessage component='span' name='password' className='form-error' />
          </div>

          <button className='button' type='submit'>Login</button>
        </Form>
      </Formik>

      <h1>Cadastro</h1>
      <Formik initialValues={{}} onSubmit={handleClickCad} validationSchema={validationCad}>
        <Form className='login-form'>
          <div className='login-form-group'>
            <Field name='email' className='form-field' placeholder='Email' />
            <ErrorMessage component='span' name='email' className='form-error' />
          </div>

          <div className='login-form-group'>
            <Field name='password' className='form-field' placeholder='Senha' />
            <ErrorMessage component='span' name='password' className='form-error' />
          </div>

          <div className='login-form-group'>
            <Field name='confirmPassword' className='form-field' placeholder='Confirme sua senha' />
            <ErrorMessage component='span' name='confirmPassword' className='form-error' />
          </div>

          <button className='button' type='submit'>Cadastro</button>
        </Form>
      </Formik>
    </div>
  );
}
