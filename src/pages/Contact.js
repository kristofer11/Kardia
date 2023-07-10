import ContactForm from '../components/ContactForm';
import Ladder from '../assets/posters/ladder.jpg'
import Hero from '../components/Hero';

const Contact = () => {
    return (
        <div>
            <Hero
                img={Ladder}
                alt='Ladder in a library with many vintage books on tall shelves'
                strength={333}
                title={
                    <>
                        <h1 className='homeOverlayText'> Contact</h1>
                        <h1 className='homeOverlayText'> Kardia</h1>
                    </>
                }
            />
            <div className='page-content contact-content'>
                <div className='info-block'>
                    <h2 className='text-center' style={{color: '#152d7d'}}>We would love to hear from you!</h2>
                    <h4 className='text-center m-4'>You can reach us via phone, email or Facebook Messenger (see the link in the lower right corner).</h4>

                    <p className='contact-text' style={{fontSize: '1.8rem'}}>Email: 
                        <span className='contact-link' id='contact-link'>
                            <a href='mailto: office@kardiaclassical.org'>office@KardiaClassical.org</a>
                        </span>
                    </p>

                    <p  style={{fontSize: '1.8rem'}}> Phone: 
                        <span className='contact-link'>
                            <a href='tel: 360-453-7334' >360-453-7334</a>
                        </span>
                    </p>
                    
                </div>

            </div>
        </div>

    )
}

export default Contact;

