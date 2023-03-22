import { Parallax } from "react-parallax";
import forest from '../assets/posters/home-img-cropped.png';
// import trees from '../assets/trees.jpg'


//COPY AND MOD THIS PARALLAX FOR THE POSTERS ON EACH PAGE. I CROPPED THE PHOTO FOR THE HOME PAGE SO THAT THE LIGHTBULBS DIDN'T WASH OUT LETTERING

const PosterBgImg = ({ img, alt, title, strength }) => {
    const bgImgStyle = {
        top: '-40%',
        position: 'absolute'
    };

    return (
        <Parallax
            bgImage={img}
            strength={strength}
            bgImageAlt={alt}
        >
            <div className='homeCardImgOverlayDivTest'>
                <div>
                    {title}         
                </div>
            </div>
        </Parallax>
    )

}

export default PosterBgImg;