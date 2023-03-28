import { Card, CardImg, CardSubtitle, CardTitle, CardBody } from 'reactstrap';

const StaffCard = ({ staff }) => {
    const { image, name, bio, title } = staff;

    return (
        <Card className='staffCard'>
            <CardImg
                src={image}
                alt={name}
                className='staffCardImg'
            />
            <CardTitle className='staffCardName'>
                {name}
            </CardTitle>
            <CardSubtitle className='staffCardTitle'>
                {title}
            </CardSubtitle>
            <CardBody>
                <p className='staffCardBio'>
                    {bio}
                </p>
                    <input type='checkBox' className='expandBtn' />
            </CardBody>
        </Card>
    )
}

export default StaffCard;