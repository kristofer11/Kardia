import { Parallax } from "react-parallax";
// import forest from '../assets/maksim-shutov-H8vhhepiiaU-unsplash (3).jpeg';
// import trees from '../assets/trees.jpg'


//TRYING TO GET A COOL SCROLLING EFFECT WITH REACT-PARALLAX. HAVEN'T GOTTEN IT GOING YET. CURRENTLY NOT USING THIS COMPONENT

//Removed bgImg attribute from <Parallax> to avoid errors.
const HomeBgImg = () => {
    <Parallax className='homeBgImg' strength={800}>
        <div className='homeCardImgOverlayDiv parallaxContent'>
            <h1 className='homeOverlayText'>| Classical</h1>
            <h1 className='homeOverlayText'>| Christian</h1>
            <h1 className='homeOverlayText'>| Parent Partnership</h1>
        </div>
    </Parallax>
}

export default HomeBgImg;