import { Parallax } from "react-parallax";
import forest from '../assets/maksim-shutov-H8vhhepiiaU-unsplash (3).jpeg';

const HomeBgImg = () => {
    <Parallax className='homeBgImg' bgImg={forest} strength={800}>
        <div className='homeCardImgOverlayDiv parallaxContent'>
            <h1 className='homeOverlayText'>| Classical</h1>
            <h1 className='homeOverlayText'>| Christian</h1>
            <h1 className='homeOverlayText'>| Parent Partnership</h1>
        </div>
    </Parallax>
}

export default HomeBgImg;