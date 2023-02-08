import { Row, Col } from 'reactstrap';
import STAFF from '../../assets/STAFF';

const facultyList = () => {
    const staff = STAFF;

  return (
    <Row>
        {
            staff.map((staff) => {
                return (
                    <Col
                        key={staff.id}
                    >
                        <StaffCard staff={staff} />
                    </Col>
                )
            })
        }
    </Row>
  )
}

export default facultyList