import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { validateContactForm } from '../utils/validateContactForm';

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