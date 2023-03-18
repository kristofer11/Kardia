import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import Bridge from '../assets/posters/tim-swaan-eOpewngf68w-unsplash.jpg'

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
    </div>
  )
}

export default Programs