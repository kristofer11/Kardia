import { Card, CardImg, CardSubtitle, CardTitle, CardBody } from 'reactstrap';

const StaffCard = (props) => {
    // const { image, name, bio, title } = props.staff;

    return (
        <>
            <Card>
                <CardImg
                    src={props.staff.image}
                />
                <CardTitle>
                    {props.staff.name}
                </CardTitle>
                <CardSubtitle>
                    {props.staff.title}
                </CardSubtitle>
                <CardBody>
                    {props.staff.bio}
                </CardBody>
            </Card>
        </>
    )
}

export default StaffCard