import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { validateContactForm } from '../utils/validateContactForm';

//Need to incorporate CAPTCHA. Already installed Google reCAPTCHA library. 

// To get started, you'll need to obtain a site key and secret key from the Google reCAPTCHA admin console. Once you have these keys, you can install the library using npm or yarn, like so:

//See commented code below to modify in order to incorporate...

const ContactForm = () => {
    let clickCount = 0;
    const handleSubmit = (values, { resetForm }) => {
        axios.post("https://formspree.io/f/xzbqvnkj?https://kardiaclassical.org/messagesent", values)
            .then(response => {
                console.log(response);
                // handle successful submission
            })
            .catch(error => {
                console.log(error);
                // handle submission error
            });
        console.log(values);
        resetForm();
    }

    return (
        <div className='form-container'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNum: '',
                    email: '',
                    message: ''
                }}
                onSubmit={handleSubmit}
                validate={validateContactForm}
            >
                {/* DON'T FORGET TO CHANGE EMAIL TO KARDIA OFFICE EMAIL */}
                <Form 
                    className='form'
                >
                    <FormGroup row>
                        <Label htmlFor='firstName' md='2'>
                            First Name
                        </Label>
                        <Col md='10'>
                            <Field
                                name='firstName'
                                placeholder='First Name'
                                className='form-control'
                            />
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor='lastName' md='2'>
                            Last Name
                        </Label>
                        <Col md='10'>
                            <Field
                                name='lastName'
                                placeholder='Last Name'
                                className='form-control'
                            />
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor='phoneNum' md='2'>
                            Phone
                        </Label>
                        <Col md='10'>
                            <Field
                                name='phoneNum'
                                placeholder='Phone'
                                className='form-control'
                            />
                            <ErrorMessage name='phoneNum'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor='email' md='2'>
                            Email
                        </Label>
                        <Col md='10'>
                            <Field
                                name='email'
                                placeholder='email'
                                type='email'
                                className='form-control'
                            />
                            <ErrorMessage name='email'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor='message' md='2'>
                            Message
                        </Label>
                        <Col md='10'>
                            <Field
                                name='message'
                                as='textarea'
                                rows='12'
                                className='form-control'
                            />

                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type='submit' color='primary'>
                                Send
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Formik>
        </div>

    )
}

export default ContactForm;


//***** MODIFY THIS CODE TO SET UP CAPTCHA:

// import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';

// const MyForm = () => {
//   const [isVerified, setIsVerified] = useState(false);

//   const onVerify = () => {
//     setIsVerified(true);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (isVerified) {
//       // submit the form
//     } else {
//       // show an error message
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="name" placeholder="Name" />
//       <input type="email" name="email" placeholder="Email" />
//       <ReCAPTCHA
//         sitekey="your_site_key"
//         onChange={onVerify}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };