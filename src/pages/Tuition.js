import tuition from '../assets/enroll/Tuition-2023-2024.png';

const Tuition = () => {
    return (
        <div className="page-content">
            <div id='whatIsClassical'  className='info-block'>
                <h2 className='text-center' style={{fontSize: '3rem'}}>Tuition and Fees</h2>
                <h3 className='text-center pt-4'>
                    Now accepting applications for the 2023-2024 school year!
                </h3>
                <img src={tuition} className='col-12 mb-5' />
                <p>Plesase note, there is a $50 per family application fee for new families.</p>
                <p >
                    Visit our <a href='/Programs'>Program Options</a> page to see all of the options for the 2023-2024 school year.
                </p>
            </div>
        </div>
    )
}

export default Tuition