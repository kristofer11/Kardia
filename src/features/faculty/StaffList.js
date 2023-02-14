import { Row, Col } from 'reactstrap';
import { STAFF } from '../../assets/STAFF';
import StaffCard from './StaffCard';

const StaffList = () => {
    const staff = STAFF;

    return (
        <Row className='justify-content-around text-center staffRow'>
            {
                staff.map((staff) => {
                    return (
                        <Col 
                            xs='11'
                            sm='10' 
                            md='9'
                            lg='6'
                            xl='3'
                            key={staff.id}
                            className='staffCardCol'
                        >``
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