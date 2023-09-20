import {
    Card,
    CardImg,
    CardImgOverlay,

} from 'reactstrap';
import enroll1 from '../assets/enroll/enroll1.png';
import enroll2 from '../assets/enroll/enroll2.png';
import enroll3 from '../assets/enroll/enroll3.png';
import Forest from '../assets/forest.jpeg';
import Hero from '../components/Hero';

const Enrollment = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <Hero
                img={Forest}
                alt='Path through a disiduous forest with summer sunshine filtering onto grass.'
                strength={333}
                title={
                    <>
                        <h1 className='homeOverlayText'> Enrollment</h1>

                    </>
                }
            />
            <div className="page-content">
                <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'>I'm a current family, how do I enroll?</h3>
                    <p>Current Kardia families, please go to your Sycamore Education login page on the “current families” page. Once you are logged in, click on “My School” in the menu on the left-hand side of your screen. Then click on “Enrollment” and then “Online Portal.” You will then be redirected to our online application for enrollment. You can also follow the steps below, but log in under “I already have an account” and use your Sycamore Family username and password to enroll for the new year. Enrollment for current families will open on Wednesday, February 1, 2023.</p>
                </div>
                <div id='whatIsClassical' style={{ borderBottom: '2px solid black', textAlign: 'center' }} className='info-block'>
                    <h3 className='text-center pt-4'>We are a new family and would like to apply</h3>
                    <p>We are glad you are interested in joining our community! Please click <a href='https://sycamore.school/login?schoolId=4125' target='_blank'>HERE</a> to access the new family application (see below for instructions on how to navigate the admissions platform). This link will redirect you to our online application portal. Once you have completed the online application and submitted all required signed forms, you will be called by the Head of School to chat about the next steps. To fully save your place, you will need to mail in enrollment fees to our address listed on the contact page. Enrollment for new families will open on Wednesday, February 15, 2023.</p>
                    <img src={enroll1} className='col-12 col-lg-8' />
                    <p className='pt-3' alt='Screenshot of the login page to Sycamore, our enrollment management site.' >
                        <em>Click on the register button, and follow the directions given.
                        </em>
                    </p>
                    <img src={enroll2} className='col-12 col-lg-8' alt='Screenshot highlighting the place new families can signup for a new Sycamore account prior to enrollment.' />
                    <p className='pt-3'>
                        <em>As a new family, click on the “I need a new account” register button.

                        </em>
                    </p>
                    <img src={enroll3} className='col-12 col-lg-8' alt='Screenshot showing where new families can enter their information when signing of for a Sycamore account pior to applying.' />
                    <p className='pt-3'>
                        <em>Fill out the necessary information to create an account. This will put you in our system and make it so you can save progress and come back to it later if needed. You will not be required to get it all done in one sitting.
                        </em>
                    </p>
                </div>
                <p>Kardia Classical School admits students of any race, color, and national or ethnic origin and does not discriminate against job applicants and students on the basis of race, color, and national or ethnic origin.</p>
            </div>
        </div>

    )
}

export default Enrollment;