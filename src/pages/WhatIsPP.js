import Hiking from '../assets/posters/hiking.jpeg';
import HikingPath from '../assets/posters/hikingpath.jpeg'
import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import legos from '../assets/legos.jpg';
import Hero from '../components/Hero';


const WhatIsPP = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <Hero
                img={HikingPath}
                alt='Mother enjoying a hike through the forest with young girl.'
                strength={333}
                title={
                    <>
                        <h1 className='homeOverlayText'> What is a</h1>
                        <h1 className='homeOverlayText'> Parent Partnership?</h1>
                    </>
                }
            />
            {/* *** CONSIDER AN IMG OR ICON TO THE SIDE OF EACH OF THESE ARTICLES. MAYBE ALTERNATE SIDES. */}

            <div className='page-content' style={{ marginTop: '2rem' }}>
                <h5 id='what-is-cc-subtitle'>
                    <strong>Faith-based families supporting a faith-based education:  </strong>
                </h5>
                <p style={{ textAlign: 'left' }}>
                    Our families are committed to Christ in all that we say and do. We bind our curriculum together with a biblical worldview and promote a life lived for Christ.
                </p>

                <h5 id='what-is-cc-subtitle'>
                    <strong>A structured environment with accountability and grace:  </strong>
                </h5>
                <p style={{ textAlign: 'left' }}>
                    We know that with school primarily done at home, that life can get in the way of everyday routine. Our program is flexible enough to work with each family in the routine that is their best fit. Families are held accountable to get the work done but are given tools to be even more successful in those busy moments.
                </p>
            </div>
            <div className='page-content'>
                <h5 id='what-is-cc-subtitle'>
                    <strong>High academic expectations at home and school:  </strong>
                </h5>
                <p style={{ textAlign: 'left' }}>
                    We hold each child to high academic standards and know that they are capable of meeting those standards. With parent help at home, we are able to help each child live to their full academic potential. With these high standards, comes accountability from parents and teachers to do their best, as well as grace when things don’t go as planned.
                </p>
            </div>
            <div className='page-content'>
                <h5 id='what-is-cc-subtitle'>
                    <strong>Educating the whole child; mind body and soul: </strong>
                </h5>
                <p style={{ textAlign: 'left' }}>
                    Children are all created and designed by God to be unique. With that comes different learning styles and abilities. We believe in using each child’s individual characteristics and gifts to help them to succeed and feel successful. Parents know their children best and how they can be the most successful.
                </p>
            </div>
            <div className='page-content'>
                <h5 id='what-is-cc-subtitle'>
                    <strong>Creating a culture of life-long learners: </strong>
                </h5>
                <p style={{ textAlign: 'left' }}>
                    Education is a privilege and we want our students to see it as such. Parents will educate their children at home while modeling a passion for learning to help create a lifelong learner in each of their children.
                </p>
                <img src={legos} className='col-12 col-lg-8' alt='Several elementary-age students being creative with legos' />
            </div>
        </div>
    )
}

export default WhatIsPP