import jogathon from '../assets/jogathon2023.jpg'
import '../styles/jogathon.css';

const Fundraising = () => {
    return (
        <div className="page-content">
            <div id='whatIsClassical' className='info-block' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className='text-center' style={{ fontSize: '3rem' }}>Fundraising Opportunities</h2>
                <p className='text-center pt-4' style={{ fontSize: '1.2rem' }}>
                    Kardia Classical is a private Christian school and relies on the financial support of parents, grandparents, and friends to keep our school in operation and make a difference for our students. Gifts of all sizes help us accomplish our mission of providing a distinctly classical and Christian education to our community. We are a not-for-profit, 501(c)3 organization, meaning your donation is tax-deductible. Tuition revenue alone does not provide 100% of the school’s operating budget. Kardia relies upon the annual giving funds, capital gifts, and other non-tuition revenue to enhance the school’s resources and help ensure that our students have exceptional opportunities in academics and the arts. Annual giving helps keep tuition affordable, allowing the school to be financially accessible to all families who desire a Christ-centered, classical education for their children. There are three main fundraising events every year and each one takes a large group of volunteers. We’d love your help, whether sponsoring an event, helping with set up, procuring, or any other ways that you can participate!
                </p>
                <img src={jogathon} className='col-12 m-3 col-lg-8' alt='Students celebrating a successful jogathon fundraiser with a baloon arch' />
                <div id='whatIsClassical' style={{ borderTop: '2px solid black' }} className='info-block jogathonSection'>
                    <h3 className='text-center pt-4'>Jog-A-Thon</h3>
                    <p>                        Our students kick off the year, raise donations, and jog laps! Teachers and parents are welcome to join in and jog with students. We will have a jog-a-thon t-shirt available to be ordered and worn on the big day. Corporate sponsors are welcome to be a part of the fun. We’ll add their logo to the back of the t-shirts as a benefit of their sponsorship. Information will go home in late summer and at parent orientation.</p>
                    <a
                        href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fkardiaclassical.us17.list-manage.com%2Ftrack%2Fclick%3Fu%3D980df44bcdbf41a0edc7951a0%26id%3D77902cdde9%26e%3De40b4ac233&data=05%7C01%7C%7C27d8db8cab514cfdb21608dbbbbf9540%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638310203759978940%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=9tvOtc7LxFIZFQwhUdDfP8Ymiae%2FDWJhQJm6zRHqVBM%3D&reserved=0"
                        target='_blank'
                        className='jogathonLink'
                    >
                        <div>
                            JOG-A-THON PLEDGES
                        </div>
                    </a>
                </div>
                <div id='whatIsClassical' style={{ borderTop: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'>Giving Tuesday</h3>
                    <p>First started in 2012, Giving Tuesday is a nationally special day each year meant to unofficially “open the giving season.” Giving Tuesday is always on the first Tuesday after Black Friday and Cyber Monday.</p>
                </div>
                <div id='whatIsClassical' style={{ borderTop: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'>Annual Auction</h3>
                    <p>The Annual Auction is an evening to celebrate what God has done in, through, and for our school, as well as an opportunity to raise money to continue our mission as a school. The Gala typically involves a silent and live auction and is a lot of fun!</p>
                    <p>This event is the largest fundraiser of the year to support the school. Proceeds from our gala are allocated towards operations and growing our school. Each family is expected to provide or procure item(s) valued at $100 or more for the auction. We offer procurement packets and training. You can get very creative with procurement! Family experiences tend to have the best results.</p>
                    <p>Auction procurement packets will be sent out several months before the event and the information in the packet is intended to assist and inspire you. The packet is loaded with great information to make the procurement process easier for you.</p>
                </div>
            </div>
        </div>
    )
}

export default Fundraising