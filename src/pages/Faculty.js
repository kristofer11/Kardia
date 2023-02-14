import FacultyList from "../features/faculty/StaffList";
import StaffCard from "../features/faculty/StaffCard";
import { STAFF } from '../assets/STAFF'

const Faculty = () => {
    return (
        <>
            <div className="text-center m-4">
                <h1 >Faculty, Staff, and School Board</h1>
            </div>
            <FacultyList />
        </>

    )
}

export default Faculty