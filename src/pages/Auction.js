import bridge from '../assets/b-k-HAl6CKxM3xU-unsplash.jpg';
import {
    Card,
    CardImg,
    CardImgOverlay
} from 'reactstrap';
import auction from '../assets/auction/building-bridges-logo-1024x1024.png';
import whitfields from '../assets/auction/Whitfields-Compact-Logo-Final-2-x-2-4-22.jpg'

const Auction = () => {
  return (
    <div>
            <Card className='mainHomeImgCard'>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>
                        <h1 className='homeOverlayText'> Annual Auction</h1>
                        <h6> <em>Building Bridges to the Future</em></h6>
                    </div>
                </CardImgOverlay>
                <CardImg src={bridge} className='mainImg' alt='Annual auction logo featuring a bridge' />
            </Card>
            <div className='page-content'>
                <a href='https://kardiaclassical.org/wp-content/uploads/2023/02/building-bridges-logo-1024x1024.png' className='text-center' target='_blank'>
                    <img className='col-8' src={auction} style={{maxWidth: '100%'}} />
                </a>
                <p className='mt-2' style={{color: '#A1474C', fontSize: '2rem', textAlign: 'center'}}><em>Click on the bridge to visit the auction website!</em></p>
                <h2 className='text-center' style={{fontSize: '2.5rem', color: '#A1474C', marginTop: '2rem', backgroundColor: '#C8CFD8'}}>Plantinum Sponsor - Whitfield's Licencins Agency</h2>
                <a href='http://whitfieldslicensing.com/' className='text-center' target='_blank'>
                    <img className='col-8' src={whitfields} style={{maxWidth: '100%'}} alt='Whitfield Auto Licensing logo' />
                </a>
                <p><em>Thank you, Whitfields Licensing, for always being a huge supporter of our school.
</em></p>
            </div>
    </div>
  )
}

export default Auction;