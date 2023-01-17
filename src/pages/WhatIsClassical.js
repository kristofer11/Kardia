import Aristotle from '../assets/Aristotle-quote-heart-and-mind-with-scenery-2000x1200.jpg';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const WhatIsClassical = () => {
    return (
        <>
            <Card className='mt-4'>
                <CardBody>
                    <CardTitle tag='h1' className='text-center'>What is Classical Education?</CardTitle>
                    <CardText>
                        Classical Christian schools use the children’s God-given strengths at each stage of growth to help them learn; young children enjoy memorizing, singing, and rhymes, so a solid foundation is laid in each subject of study at this age; junior high students are inquisitive, so we develop their ability to reason and discern the truth; high school students want to talk, so we teach them how to present their ideas persuasively. The result is a graduate who knows what they believe and why and can positively impact the community around them.
                    </CardText>
                </CardBody>
            </Card>
            <img src={Aristotle} />



        </>
    )
}

export default WhatIsClassical