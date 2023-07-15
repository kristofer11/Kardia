import jogathon from '../assets/jogathon2023.jpg';
import {
    Card,
    CardImg,
    CardImgOverlay,

} from 'reactstrap';
import aristotle from '../assets/Aristotle-quote-heart-and-mind-with-scenery-2000x1200.jpg'
import Hero from '../components/Hero';
import forest from '../assets/posters/home-img-cropped.png';
import Typing from '../assets/typing.jpeg';
import Classroom from '../assets/classroom.jpeg';
import Bubbles from '../assets/bubbles.jpeg';
import Hammock from '../assets/hammock.jpeg';


const Home = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <Hero
                img={forest}
                alt='Library shelves with prominent lightbulbs'
                strength={333}
                title={
                    <>
                        <h1 className='homeOverlayText'>Classical</h1>
                        <h1 className='homeOverlayText'>Christian</h1>
                        <h1 className='homeOverlayText'>Parent Partnership</h1>
                    </>
                }
            />
            <div className='home-intro page-content'>
                <h2 className='text-center pt-3'><em>Kardia </em>offers the <strong>best of both worlds</strong></h2>
                <p>
                    Kardia Classical School combines the benefits of homeschooling and private school education. We partner with parents throughout their educational journey. Children get to come in person two days a week and learn from home three days a week, offering greater flexibility and educational quality.
                </p>

                <img src={jogathon}
                    className='col-12 my-4' alt='Smiling children with PE teacher under an arch of balloons.'
                />

                <p>
                    Our goal is to partner with parents to make the transition to homeschooling an easier one. With support from our certified teachers, you will receive weekly lesson plans, video lessons for more difficult subjects, in-person classes twice a week, monthly parent check-ins, report cards, and/or a standardized testing opportunity for reporting to the state, and more! We would love the opportunity to partner with you on your new endeavor to provide your child with a Classical Christian Education.</p>
                <p> Want to see some sample videos? Visit our YouTube channel <a href='https://www.youtube.com/playlist?list=PL19OI_6BLPETGaEhB5ALzP9l2PIKPlcKz' target='_blank' className='you-tube-link'>HERE</a> to view a selection of our digital content.
                </p>
            </div>
            <div className='page-content'>



                <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-5'>What is Classical Christian Education?</h3>
                    <p>                         Classical Christian schools use the children’s God-given strengths at each stage of growth to help them learn; young children enjoy memorizing, singing, and rhymes, so a solid foundation is laid in each subject of study at this age; junior high students are inquisitive, so we develop their ability to reason and discern the truth; high school students want to talk, so we teach them how to present their ideas persuasively. The result is a graduate who knows what they believe and why and can positively impact the community around them.<br /><strong>Learn more by visiting the <a href=' https://classicalchristian.org/what-is-cce/' target='_blank'>ACCS website.</a></strong></p>
                </div>
                <div id='whatIsClassical' style={{ borderBottom: '2px solid black', marginTop: '0' }} className='info-block'>
                    <h3 className='text-center pt-4'>Our Mission</h3>
                    <p>Kardia Classical School aims to provide parents with the tools that they need to classically educate their children rooted in a Christian worldview. Together, parents and teachers will nurture students’ appreciation of truth, goodness, and beauty as they strive for excellence, while guiding them to live purposefully in the service of God and man.</p>
                </div>
                <div id='whatIsClassical' style={{ borderBottom: '2px solid black', marginTop: '0', width: '100%' }} className='info-block'>
                    <h3 className='text-center pt-4'>Learn More About <em>Kardia</em></h3>
                    <div className='home-link-div'>


                        <a href='/contact'>
                            <Card className='home-page-link' id='contact-us-link'>
                                <CardImg className='home-page-link-img' src={Typing} alt='Typing on a laptop' />
                                <CardImgOverlay><h5 className='home-page-link-text'>Contact Us</h5></CardImgOverlay>
                            </Card>
                        </a>
                        <a href='/programs'>
                            <Card className='home-page-link'>
                                <CardImg className='home-page-link-img' src={Classroom} alt='classroom' />
                                <CardImgOverlay><h5 className='home-page-link-text'>Programs We Offer</h5></CardImgOverlay>
                            </Card>
                        </a>
                        <a href='/enrollment'>
                            <Card className='home-page-link'>
                                <CardImg className='home-page-link-img' src={Bubbles} alt='Kids with bubbles' />
                                <CardImgOverlay><h5 className='home-page-link-text'>Enrollment</h5></CardImgOverlay>
                            </Card>
                        </a>
                        <a href='/whatispp'>
                            <Card className='home-page-link'>
                                <CardImg className='home-page-link-img' src={Hammock} alt='Two kids in a hammock' />
                                <CardImgOverlay><h5 className='home-page-link-text'>What is a <em>Parent Partnership</em>?</h5></CardImgOverlay>
                            </Card>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;