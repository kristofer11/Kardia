import { Card, CardImg, CardSubtitle, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const StaffCard = (staff) => {
    const { image, name, bio, title } = staff;

    return (
        <>
            <Card>
                <CardImg
                    src={image}
                />
                <CardTitle>
                    {name}
                </CardTitle>
                <CardSubtitle>
                    {title}
                </CardSubtitle>
                <CardBody>
                    {bio}
                </CardBody>
            </Card>
        </>
    )
}

export default StaffCard