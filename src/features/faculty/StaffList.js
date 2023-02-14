import { Row, Col } from 'reactstrap';
import { STAFF } from '../../assets/STAFF';
import StaffCard from './StaffCard';

const StaffList = () => {
    const staff = STAFF;

    return (
        <Row className='justify-content-center text-center'>
            {
                staff.map((staff) => {
                    return (
                        <Col 
                            xs='11'
                            sm='10' 
                            md='8' 
                            key={staff.id}
                            className='mb-4 staffCardCol'
                        >
                            <StaffCard
                                staff={staff}
                            />
                        </Col>
                    )

                })
            }
        </Row>
    )
}

export default StaffList;