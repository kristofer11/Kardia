import mainHomeImg from '../assets/posters/maksim-shutov-H8vhhepiiaU-unsplash (4).jpeg';
import jogathon from '../assets/jogathon.jpeg';
import {
    Card,
    CardImg,
    CardImgOverlay,

}
    from 'reactstrap';
import cousins from '../assets/cousins.png';
import aristotle from '../assets/Aristotle-quote-heart-and-mind-with-scenery-2000x1200.jpg'
import HomeBgImg from '../components/HomeBgImg';
import Trees from '../assets/posters/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg'

const Home = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <Card className='mainHomeImgCard'>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>
                        <h1 className='homeOverlayText'> Classical</h1>
                        <h1 className='homeOverlayText'> Christian</h1>
                        <h1 className='homeOverlayText'> Parent Partnership</h1>
                    </div>
                </CardImgOverlay>
                <CardImg src={Trees} className='mainImg' alt='Trees' />
            </Card>
            <div  className='home-intro'>
                <h2 className='text-center pt-4'><em>Kardia </em>offers the <strong>best of both worlds</strong></h2>
                <p>                        Our goal is to partner with parents to make the transition to homeschooling an easier one. With support from our certified teachers, you will receive weekly lesson plans, video lessons for more difficult subjects, in-person classes twice a week, monthly parent check-ins, report cards, and/or a standardized testing opportunity for reporting to the state, and more! We would love the opportunity to partner with you on your new endeavor to provide your child with a Classical Christian Education.</p>
                <p>                        Want to see some sample videos? By visiting <a href='https://www.youtube.com/playlist?list=PL19OI_6BLPETGaEhB5ALzP9l2PIKPlcKz' target='_blank'>ur YouTube channel</a> you can sample some of our digital content.</p>
            </div>
            <img src={jogathon} className='col-md-10 col-lg-6' />

            <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='m-4 col-md-9 col-lg-7'>
                <h2 className='text-center pt-4'>What is Classical Christian Education?</h2>
                <p>                        Classical Christian schools use the children’s God-given strengths at each stage of growth to help them learn; young children enjoy memorizing, singing, and rhymes, so a solid foundation is laid in each subject of study at this age; junior high students are inquisitive, so we develop their ability to reason and discern the truth; high school students want to talk, so we teach them how to present their ideas persuasively. The result is a graduate who knows what they believe and why and can positively impact the community around them.</p>
            </div>
            <HomeBgImg />
            <img src={aristotle} className='col-12 col-lg-10'/>

        </div>
    )
}

export default Home