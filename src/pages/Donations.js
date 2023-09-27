import '../styles/donations.css';
import payPal from '../assets/paypal.png';
import venmo from '../assets/venmo.webp';
import { Tooltip } from 'react-tooltip';

const Donations = () => {
    return (
        <div className="page-content">
            <div id='whatIsClassical' className='info-block text-center'>
                <h2 className='text-center' style={{ fontSize: '3rem' }}>Donations</h2>

                {/* <img src={tuition} className='col-12 mb-5' /> */}
                <p >
                    Kardia Classical School is a nonprofit private education organization and every bit of money that we raise or is donated goes back to the school and our students. Our goal is to help our program to grow over the next few years. As we grow, we will need a larger space to meet, more quality teachers, materials, and more! We are constantly looking for ways to enhance our program and offer the best to our students and families. Thank you for considering donating to our wonderful little school and our amazing students.
                </p>
                <p className='linkInvite'><em>Click on one of the links below to donate, either via PayPal or Venmo.</em></p>
                <div className='donationLinkDiv my-5'>
                    <a
                        className='w-100 donationLink'
                        href='https://www.paypal.com/donate/?hosted_button_id=WAEDRZYKQJJBE'
                        target='_blank'
                        data-tooltip-id='paypal-tooltip'
                        data-tooltip-content='Donate via PayPal'
                    >
                        <Tooltip id="paypal-tooltip" />
                        <img src={payPal} className='mx-3 mb-md-0 col-8 col-sm-6 col-md-5 col-lg-2' alt='Paypal logo linking to Kardia donation page.' />
                    </a>
                    <a
                        className='text-center w-100 donationLink venmo'
                        href='https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.venmo.com%2Fu%2Fkardiaclassicalschool&data=05%7C01%7C%7C358b0343fe0b4bfe8b2e08dbbeeac69a%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638313687802808850%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=8BCTNeol6ZA9IjzBrPtdmxTcZ0bGvaP3lT0f89%2FcNNw%3D&reserved=0'
                        target='_blank'
                        data-tooltip-id='venmo-tooltip'
                        data-tooltip-content='Donate via Venmo'
                    >
                        <img src={venmo} className='mx-3 mt-md-0 mt-5 col-8 col-sm-6 col-md-5 col-lg-2' alt='Venmo logo linking to Kardia donation page.' />
                        <Tooltip id="venmo-tooltip" />

                    </a>

                </div>

                <p className='mt-3'><strong>Your contributions may be tax-deductible</strong>. Kardia Classical School’s Tax ID is #85-1947905. We are an IRS-designated 501 (c)(3) non-profit organization. Please contact your tax advisor for tax deduction advice.</p>


            </div>
        </div>
    )
}

export default Donations