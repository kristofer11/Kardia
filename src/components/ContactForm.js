import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
    let clickCount = 0;
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    return (
        <div >
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
                style={{border: '2px solid red', marginTop: '2rem', width: '88vw'}}
            >
{/* DON'T FORGET TO CHANGE EMAIL TO KARDIA OFFICE EMAIL */}
                <Form action='https://formsubmit.co/klhvattum@live.com' method='post'>
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
                        <Label htmlFor='feedback' md='2'>
                            Message
                        </Label>
                        <Col md='10'>
                            <Field
                                name='feedback'
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

export default ContactForm