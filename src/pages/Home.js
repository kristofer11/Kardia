import mainHomeImg from '../assets/maksim-shutov-H8vhhepiiaU-unsplash (4).jpeg';
import jogathon from '../assets/jogathon.jpeg';
import {
    Card,
    CardImg,
    CardImgOverlay,
    Row,
    Col
}
    from 'reactstrap';
import cousins from '../assets/cousins.png';
import aristotle from '../assets/Aristotle-quote-heart-and-mind-with-scenery-2000x1200.jpg'
import HomeBgImg from '../components/HomeBgImg';

const Home = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <Card className='mainHomeImgCard'>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>
                        <h1 className='homeOverlayText'>| Classical</h1>
                        <h1 className='homeOverlayText'>| Christian</h1>
                        <h1 className='homeOverlayText'>| Parent Partnership</h1>
                    </div>
                </CardImgOverlay>
                <CardImg src={mainHomeImg} className='mainImg w-100' alt='Kardia students celebrating jogathon with a balloon arch in the background.' />
            </Card>
            <div style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='m-4'>
                <h2 className='text-center pt-4'>Our Philosophy</h2>
                <p>                        Our goal is to partner with parents to make the transition to homeschooling an easier one. With support from our certified teachers, you will receive weekly lesson plans, video lessons for more difficult subjects, in-person classes twice a week, monthly parent check-ins, report cards, and/or a standardized testing opportunity for reporting to the state, and more! We would love the opportunity to partner with you on your new endeavor to provide your child with a Classical Christian Education.</p>
                <p>                        If you want to see some examples of our videos, <a href='https://www.youtube.com/playlist?list=PL19OI_6BLPETGaEhB5ALzP9l2PIKPlcKz' target='_blank'>click this link</a>. It will take you to our YouTube channel and you will have access to a few of our sample videos.</p>
            </div>
            <img src={aristotle} style={{width: '100%'}}/>
            <div style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='m-4'>
                <h2 className='text-center pt-4'>What is Classical Christian Education?</h2>
                <p>                        Classical Christian schools use the children’s God-given strengths at each stage of growth to help them learn; young children enjoy memorizing, singing, and rhymes, so a solid foundation is laid in each subject of study at this age; junior high students are inquisitive, so we develop their ability to reason and discern the truth; high school students want to talk, so we teach them how to present their ideas persuasively. The result is a graduate who knows what they believe and why and can positively impact the community around them.</p>
            </div>
            <img src={jogathon} style={{ width: '100%' }} />
            <HomeBgImg />
        </div>
    )
}

export default Home