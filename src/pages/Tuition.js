import tuition from '../assets/enroll/Tuition 2023-2024-1.png';
import Tuesday from '../assets/Tuesday-Camp-2023-2024-768x113.png';

const Tuition = () => {
    return (
        <div className="page-content">
            <div id='whatIsClassical'  className='info-block'>
                <h2 className='text-center' style={{fontSize: '3rem'}}>Tuition and Fees</h2>
                <h3 className='text-center pt-4'>
                    Now accepting applications for the 2023-2024 school year!
                </h3>
                <img src={tuition} className='col-12 mb-5' alt='Charts displaying tuition prices.' />
                <p><strong>Please note, there is a $50 per family application fee for new families.</strong><em> This is a one-time fee.</em></p>
                <p >
                    Visit our <a href='/Programs'>Program Options</a> page to see all of the options for the 2023-2024 school year.
                </p>
                <img src={Tuesday} className='col-12' alt='Chart showing costs for half-day enrichment program' />
            </div>
        </div>
    )
}

export default Tuition;