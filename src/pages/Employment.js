import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import Chalkboard from '../assets/posters/peter-gargiulo-cGNCepznaV8-unsplash.jpg'

const Employment = () => {
  return (
    <div>
         <Card className='mainHomeImgCard'>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>
                        <h1 className='homeOverlayText'> Employment</h1>
                    </div>
                </CardImgOverlay>
                <CardImg src={Chalkboard} className='mainImg' alt='Trees' />
            </Card>
    </div>
  )
}

export default Employment