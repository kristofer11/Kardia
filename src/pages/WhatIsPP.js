import Hiking from '../assets/posters/alberto-casetta-REKXJ7JhwiI-unsplash.jpg';
import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";


const WhatIsPP = () => {
    return (
        <div>
            <Card className='mainHomeImgCard'>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>
                        <h1 className='homeOverlayText'> What is a</h1>
                        <h1 className='homeOverlayText'> Parent Partnership?</h1>
                    </div>
                </CardImgOverlay>
                <CardImg src={Hiking} className='mainImg' alt='Trees' />
            </Card>
        </div>
    )
}

export default WhatIsPP