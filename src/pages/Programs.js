import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import Bridge from '../assets/posters/tim-swaan-eOpewngf68w-unsplash.jpg';
import sitting from '../assets/sitting.jpg';
import atHome from '../assets/at-home.jpg';
import tuesday from '../assets/tuesday.jpg';

const Programs = () => {
  return (
    <div>
                 <Card className='mainHomeImgCard'>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>
                        <h1 className='homeOverlayText'> Program</h1>
                        <h1 className='homeOverlayText'> Options</h1>
                    </div>
                </CardImgOverlay>
                <CardImg src={Bridge} className='mainImg' alt='Trees' />
            </Card>
            <div className="page-content">
            <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'>Two Full Days In-person</h3>
                    <p>Our feature program option offers two full days in-person a week. This includes enrichment classes (art/music/PE), with history,  science, grammar, and writing taught at school. You will also get a formal report for your records. However, the best part is that parents may drop students off and leave on in-person days. For your three at-home days, there will be video lessons for more complex subjects. We send out a curriculum list for easy purchasing. Kardia also provides weekly lesson plans, and a monthly in-person, over-the-phone, or online parent-teacher check-in.</p>
                    <p>
                        Kardia Classical School is a member of the Association of Classical Christian Schools <a href='https://classicalchristian.org/https://classicalchristian.org/' target='_blank'>(ACCS)</a>. Please see the teacher job description (see document section below) for more information about daily expectations.
                    </p>
                </div>
                <img src={sitting} className='col-12' />
                <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'>Kardia at Home</h3>
                    <p>A secondary option for the 2022-2023 school year is for our guided at-home learning plan. “Kardia at Home” is a four-day guided homeschool program. There will be video lessons for more complex subjects, weekly lesson plans, a curriculum list for easy purchasing, and a monthly online or over-the-phone parent-teacher check-in.</p>
                </div>
                <img src={atHome} className='col-12' />
                <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'>"Tuesday Camp" - Enrichment Half Day</h3>
                    <p>This class will be held on Tuesdays and there are two session options, morning or afternoon. The morning session will be focused on Kindergarten through third-grade phonics and math. This is a great opportunity for extra instruction in these crucial topics. Our afternoon session will have a different overall theme each quarter and will include all kinds of STEAM activities. STEAM is science, technology, engineering, art, and music. You can sign up for one or both time slots if your child is in K-3rd (AM or PM), or just the PM slot if they are older.</p>
                    <p>
                    You can sign up for all four quarters ahead of time if you want to save space for your child(ren). There are eight weeks in each quarter. This option can be chosen in conjunction with another program option. Uniforms are not required on Tuesday Camp days.
                    </p>
                    <p>
                    We will also have a “drop-in” option for a slightly higher daily fee. See the tuition and fees tab for more information.
                    </p>
                </div>
                <img src={tuesday} className='col-12' />
                <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'><em>A La Carte</em> Options</h3>
                    <p>This class will be held on Tuesdays and there are two session options, morning or afternoon. The morning session will be focused on Kindergarten through third-grade phonics and math. This is a great opportunity for extra instruction in these crucial topics. Our afternoon session will have a different overall theme each quarter and will include all kinds of STEAM activities. STEAM is science, technology, engineering, art, and music. You can sign up for one or both time slots if your child is in K-3rd (AM or PM), or just the PM slot if they are older.</p>
                    <p>
                    You can sign up for all four quarters ahead of time if you want to save space for your child(ren). There are eight weeks in each quarter. This option can be chosen in conjunction with another program option. Uniforms are not required on Tuesday Camp days.
                    </p>
                    <p>
                    We will also have a “drop-in” option for a slightly higher daily fee. See the tuition and fees tab for more information.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Programs