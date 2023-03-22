import bridge from '../assets/b-k-HAl6CKxM3xU-unsplash.jpg';
import {
    Card,
    CardImg,
    CardImgOverlay
} from 'reactstrap';
import auction from '../assets/auction/building-bridges-logo-1024x1024.png';
import whitfields from '../assets/auction/Whitfields-Compact-Logo-Final-2-x-2-4-22.jpg';
import Hero from '../components/Hero';

const Auction = () => {
    return (
        <div>
            <Hero
                img={bridge}
                alt='Train on bridge'
                strength={200}
                title={
                    <>
                        <h1 className='homeOverlayText'> Annual Auction</h1>
                        <h6     
                            style={{    
                                fontSize: '4vw', 
                                color: 'white', 
                                marginLeft: '12vw', 
                                padding: '.24rem'
                            }}> 
                            <em>Building Bridges to the Future</em>
                        </h6>
                    </>
                }
            />
            <div className='page-content'>
                <a href='https://fundraiser.support/kardia2023auction' className='text-center' target='_blank'>
                    <img className='col-8' src={auction} style={{ maxWidth: '100%' }} />
                </a>
                <p className='mt-2' style={{ color: '#A1474C', fontSize: '2rem', textAlign: 'center' }}><em>Click on the bridge to visit the auction website!</em></p>
                <h2 className='text-center' style={{ fontSize: '2.5rem', color: '#A1474C', marginTop: '2rem', backgroundColor: '#C8CFD8' }}>Plantinum Sponsor - Whitfield's Licencins Agency</h2>
                <a href='http://whitfieldslicensing.com/' className='text-center' target='_blank'>
                    <img className='col-8' src={whitfields} style={{ maxWidth: '100%' }} alt='Whitfield Auto Licensing logo' />
                </a>
                <p><em>Thank you, Whitfields Licensing, for always being a huge supporter of our school.
                </em></p>
            </div>
        </div>
    )
}

export default Auction;