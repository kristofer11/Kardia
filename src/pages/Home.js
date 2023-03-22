import jogathon from '../assets/jogathon2023.jpg';
import {
    Card,
    CardImg,
    CardImgOverlay,

} from 'reactstrap';
import aristotle from '../assets/Aristotle-quote-heart-and-mind-with-scenery-2000x1200.jpg'
import PosterBgImg from '../components/PosterBgImg';
import forest from '../assets/posters/home-img-cropped.png';
import Trees from '../assets/posters/janko-ferlic-sfL_QOnmy00-unsplash.jpg'

const Home = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
        <PosterBgImg 
            img={forest}
            alt='Library shelves with prominent lightbulbs'
            strength={200}
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
                <p>
                    Our goal is to partner with parents to make the transition to homeschooling an easier one. With support from our certified teachers, you will receive weekly lesson plans, video lessons for more difficult subjects, in-person classes twice a week, monthly parent check-ins, report cards, and/or a standardized testing opportunity for reporting to the state, and more! We would love the opportunity to partner with you on your new endeavor to provide your child with a Classical Christian Education.</p>
                <p>                        Want to see some sample videos? By visiting our <a href='https://www.youtube.com/playlist?list=PL19OI_6BLPETGaEhB5ALzP9l2PIKPlcKz' target='_blank'>YouTube channel</a> you can sample some of our digital content.
                </p>
            </div>
            <div className='page-content'>

                <img src={jogathon} className='col-12' />

                <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'>What is Classical Christian Education?</h3>
                    <p>                        Classical Christian schools use the children’s God-given strengths at each stage of growth to help them learn; young children enjoy memorizing, singing, and rhymes, so a solid foundation is laid in each subject of study at this age; junior high students are inquisitive, so we develop their ability to reason and discern the truth; high school students want to talk, so we teach them how to present their ideas persuasively. The result is a graduate who knows what they believe and why and can positively impact the community around them.</p>
                </div>
                <div id='whatIsClassical' style={{ borderBottom: '2px solid black', marginTop: '0' }} className='info-block'>
                    <h3 className='text-center pt-4'>Our Mission</h3>
                    <p>Kardia Classical School aims to provide parents with the tools that they need to classically educate their children rooted in a Christian worldview. Together, parents and teachers will nurture students’ appreciation of truth, goodness, and beauty as they strive for excellence, while guiding them to live purposefully in the service of God and man.</p>
                </div>
                <img src={aristotle} className='col-12 col-lg-10' />
            </div>


        </div>
    )
}

export default Home;