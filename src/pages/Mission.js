import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import handsUp from '../assets/hands-up.jpeg'

const Mission = () => {
    return (
        <div>
            <Card className='mt-4'>
                <CardBody>
                    <CardTitle tag='h1' className='text-center'>Our Mission</CardTitle>
                    <CardText>
                        Kardia Classical School aims to provide parents with the tools that they need to classically educate their children rooted in a Christian worldview. Together, parents and teachers will nurture students’ appreciation of truth, goodness, and beauty as they strive for excellence, while guiding them to live purposefully in the service of God and man.
                    </CardText>
                </CardBody>
            </Card>
            <img src={handsUp} className='mainImg mt-4' />
            <Card className='mt-4'>
                <CardBody>
                    <CardTitle tag='h1' className='text-center'>Our Beginning</CardTitle>
                    <CardText>

                        In the midst of a pandemic, many things can change. We saw a need for a new way to educate our children while keeping them social, as well as safe. Homeschooling is a scary word for many families who never envisioned themselves in that position. At Kardia Classical School, our goal is to partner with parents to help them classically educate their kindergarten through eighth-grade children. This is a great opportunity for parents and teachers to work together through this difficult time for the betterment of their children’s education.
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Mission