import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import Statues from '../assets/posters/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg'
import handsUp from '../assets/hands-up.jpeg'

const Mission = () => {
    return (
        <div>
             <Card className='mainHomeImgCard'>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>
                        <h1 className='homeOverlayText'> </h1>
                        <h1 className='homeOverlayText'> Our </h1>
                        <h1 className='homeOverlayText'> Beginning</h1>
                    </div>
                </CardImgOverlay>
                <CardImg src={Statues} className='mainImg' alt='Trees' />
            </Card>
            <div className="page-content">

            <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
            <h3 className='text-center pt-4'>How did <em>Kardia</em> come to be?</h3>
                    <p> In the midst of a pandemic, many things can change. We saw a need for a new way to educate our children while keeping them social, as well as safe. Homeschooling is a scary word for many families who never envisioned themselves in that position. At Kardia Classical School, our goal is to partner with parents to help them classically educate their kindergarten through eighth-grade children. This is a great opportunity for parents and teachers to work together through this difficult time for the betterment of their children’s education.</p>
                </div>
                <img src={handsUp} className='mainImg mt-4' />   
          
            </div>

           
        </div>
    )
}

export default Mission