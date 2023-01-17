import Jogathon from '../assets/jogathon.jpg';
import {
    Card,
    CardSubtitle,
    CardBody,
    CardText,
    CardTitle
}
    from 'reactstrap';

const Home = () => {
    return (
        <div className='d-flex flex-column align-items-center'>

            <Card className='mt-4'>
                <CardBody>
                    <img src={Jogathon} className='homeMainImg' width='100%' alt='Kardia students celebrating jogathon with a balloon arch in the background.' />
                    <CardSubtitle>
                        <blockquote>"Blessed are the pure in heart, for they shall see God." <cite>Matthew 5:8</cite></blockquote>
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card className='col-md-10 col-lg-8 mt-4'>
                <CardBody>
                    <CardTitle tag='h5' className='text-center'>
                        Our Philosophy
                    </CardTitle>
                    <CardText>
                        Our goal is to partner with parents to make the transition to homeschooling an easier one. With support from our certified teachers, you will receive weekly lesson plans, video lessons for more difficult subjects, in-person classes twice a week, monthly parent check-ins, report cards, and/or a standardized testing opportunity for reporting to the state, and more! We would love the opportunity to partner with you on your new endeavor to provide your child with a Classical Christian Education.
                    </CardText>
                    <CardText>
                        If you want to see some examples of our videos, <a href='https://www.youtube.com/playlist?list=PL19OI_6BLPETGaEhB5ALzP9l2PIKPlcKz' target='_blank'>click this link</a>. It will take you to our YouTube channel and you will have access to a few of our sample videos.
                    </CardText>
                    <CardText>
                        Kardia Classical School admits students of any race, color, and national or ethnic origin and does not discriminate against job applicants and students on the basis of race, color, and national or ethnic origin.
                    </CardText>
                </CardBody>
            </Card>
            <Card className='col-md-10 col-lg-8 mt-4'>
                <CardTitle tag='h5' className='text-center'>What is <em>Classical Christian education?</em></CardTitle>
                <CardBody>
                    <CardText>
                        Classical Christian schools use the children’s God-given strengths at each stage of growth to help them learn; young children enjoy memorizing, singing, and rhymes, so a solid foundation is laid in each subject of study at this age; junior high students are inquisitive, so we develop their ability to reason and discern the truth; high school students want to talk, so we teach them how to present their ideas persuasively. The result is a graduate who knows what they believe and why and can positively impact the community around them.
                    </CardText>
                </CardBody>

            </Card>
        </div>
    )
}

export default Home