import { Row, Col } from 'reactstrap';
import { STAFF } from '../../assets/STAFF';
import StaffCard from './StaffCard';

const StaffList = () => {
    const staff = STAFF;

  return (
    <Row>
        {
            staff.map((staff) => {
                return 
                <Col key={staff.id}>
                    <StaffCard 
                        staff={staff}
                    />
                </Col>
            })
        }
    </Row>
  )
}

export default StaffList;