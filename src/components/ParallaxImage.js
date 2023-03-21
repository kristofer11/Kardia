const ParallaxImage = ({ src, alt }) => {
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const parallaxElement = document.querySelector('.parallax-image');
        parallaxElement.style.top = `${scrollTop}px`;
      };
   
      window.addEventListener('scroll', handleScroll);
   
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
   
    return (
      <img className="parallax-image" src={src} alt={alt} />
    );
   }
   
   export default ParallaxImage;