import FacultyList from "../features/faculty/StaffList";
import { Card, CardImgOverlay, CardImg, } from 'reactstrap';
import Library from '../assets/posters/natalie-van-dam-onsl9K6Wy4U-unsplash.jpg';


const Faculty = () => {
    return (
        <>
            <Card className='mainHomeImgCard' style={{marginBottom: '2rem'}}>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>
                        <h1 className='homeOverlayText' > Faculty</h1>
                        <h1 className='homeOverlayText'> Staff</h1>
                        <h1 className='homeOverlayText'> and School Board</h1>
                    </div>
                </CardImgOverlay>
                <CardImg src={Library} className='mainImg' alt='Trees' />
            </Card>
            <FacultyList />
        </>
    )
}

export default Faculty;