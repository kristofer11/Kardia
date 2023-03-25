import payPal from '../assets/Paypal-300x297.png'

const Donations = () => {
    return (
        <div className="page-content">
            <div id='whatIsClassical' className='info-block text-center'>
                <h2 className='text-center' style={{ fontSize: '3rem' }}>Donations</h2>

                {/* <img src={tuition} className='col-12 mb-5' /> */}
                <p >
                    Kardia Classical School is a nonprofit private education organization and every bit of money that we raise or is donated goes back to the school and our students. Our goal is to help our program to grow over the next few years. As we grow, we will need a larger space to meet, more quality teachers, materials, and more! We are constantly looking for ways to enhance our program and offer the best to our students and families. Thank you for considering donating to our wonderful little school and our amazing students.
                </p>
                <p><em>Click on the PayPal logo below to be routed to our PayPal account.</em></p>
                <a className='text-center w-100' href='https://www.paypal.com/donate?token=3sb9oYsFuCbGw4QDRm-wFvxiFRvWBPFhhxT8d4AAduCM5BchvSE52sXCwttdI4v_YWAhTX4ebeQRew7e' target='_blank'>
                    <img src={payPal} className='col-4 mt-3' />
                </a>
                <p className='mt-3'><strong>Your contributions may be tax-deductible</strong>. Kardia Classical School’s Tax ID is #85-1947905. We are an IRS-designated 501 (c)(3) non-profit organization. Please contact your tax advisor for tax deduction advice.</p>
                

            </div>
        </div>
    )
}

export default Donations