import { Parallax } from "react-parallax";

const Hero = ({ img, alt, title, strength }) => {
    return (
        <Parallax
            bgImage={img}
            strength={strength}
            bgImageAlt={alt}
        >
            <div className='hero'>
                <div className='hero-text'>
                    {title}         
                </div>
            </div>
        </Parallax>
    )

}

export default Hero;