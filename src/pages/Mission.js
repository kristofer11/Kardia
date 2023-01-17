import { Card, CardBody, CardTitle, CardText } from "reactstrap"

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
            <h1>Add photo here??? Then delete this h1</h1>
        </div>
    )
}

export default Mission