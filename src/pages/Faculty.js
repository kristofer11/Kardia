import FacultyList from "../features/faculty/StaffList";
import { Card, CardImgOverlay, CardImg, } from 'reactstrap';
import Library from '../assets/posters/natalie-van-dam-onsl9K6Wy4U-unsplash.jpg';
import Hero from '../components/Hero';


const Faculty = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <Hero
                img={Library}
                alt='Library with vaulted ceiling'
                strength={333}
                title={
                    <>
                        <h1 className='homeOverlayText' > Faculty</h1>
                        <h1 className='homeOverlayText'> Staff</h1>
                        <h1 className='homeOverlayText'> and School Board</h1>
                    </>
                }
            />
            <div style={{marginTop: '2rem'}}>
                <FacultyList />                
            </div>

        </div>
    )
}

export default Faculty;