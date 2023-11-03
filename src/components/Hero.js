import { Parallax } from "react-parallax";
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const Hero = ({ img, alt, title, strength }) => {
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0.7,0.7)',
        config: { duration: 400 }
    });

    useEffect(() => {
        setToggle(true);
    }, [])

    return (

        <Parallax
            bgImage={img}
            strength={strength}
            bgImageAlt={alt}
        >
            <animated.div style={animatedStyle}>
                <div className='hero'>
                    <div className='hero-text'>
                        {title}
                    </div>
                </div>
            </animated.div>
        </Parallax>


    )

}

export default Hero;