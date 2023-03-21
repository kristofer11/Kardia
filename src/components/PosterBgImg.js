import { Parallax } from "react-parallax";
import forest from '../assets/posters/home-img-cropped.png';
// import trees from '../assets/trees.jpg'


//COPY AND MOD THIS PARALLAX FOR THE POSTERS ON EACH PAGE. I CROPPED THE PHOTO FOR THE HOME PAGE SO THAT THE LIGHTBULBS DIDN'T WASH OUT LETTERING

const PosterBgImg = (img, alt) => {
    const bgImgStyle = {
        top: '-40%',
        position: 'absolute'
    };

    return (
    <Parallax 
        bgImage={forest} 
        strength={200}
        bgImageAlt='Background image for page banner'
    >
        <div className='homeCardImgOverlayDivTest'>
            <h1 className='homeOverlayText'>Classical</h1>
            <h1 className='homeOverlayText'>Christian</h1>
            <h1 className='homeOverlayText'>Parent Partnership</h1>
        </div>
        <div style={bgImgStyle}></div>
    </Parallax>        
    )

}

export default PosterBgImg;