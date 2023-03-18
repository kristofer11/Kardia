import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import Chalkboard from '../assets/posters/peter-gargiulo-cGNCepznaV8-unsplash.jpg';
import TeacherApp from '/Users/klhva/Documents/Repos/kardia/src/assets/downloads/Job-Application-Teacher.pdf';
import SubApp from '/Users/klhva/Documents/Repos/kardia/src/assets/downloads/Job-Application-Substitute.pdf';
import Mission from '/Users/klhva/Documents/Repos/kardia/src/assets/downloads/Mission-and-statement-of-faith-agreement.pdf';
import JobDescrip from '/Users/klhva/Documents/Repos/kardia/src/assets/downloads/Teacher-Job-Description.pdf';

const Employment = () => {
    return (
        <div>
            <Card className='mainHomeImgCard'>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>
                        <h1 className='homeOverlayText'> Employment</h1>
                    </div>
                </CardImgOverlay>
                <CardImg src={Chalkboard} className='mainImg' alt='Trees' />
            </Card>
            <div className="page-content">
                <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'>Looking for part-time teaching experience at a Classical Christian School?</h3>
                    <p>Kardia Classical School is a school in Snohomish County, Washington, serving kindergarten through eighth-grade students. We strive for excellence in academics and seek those that possess a love for children, a love for learning, and the gift of teaching. We look for applicants who are marked by their passion for life-long learning, Christian discipleship, a biblical worldview, and a solid working knowledge of the subject(s) they teach.</p>
                    <p>
                        Kardia Classical School is a member of the Association of Classical Christian Schools <a href='https://classicalchristian.org/https://classicalchristian.org/' target='_blank'>(ACCS)</a>. Please see the teacher job description (see document section below) for more information about daily expectations.
                    </p>
                </div>
                <h3>OPEN POSITIONS FOR THE 2023-2024 SCHOOL YEAR</h3>
                <h4>Part-Time Positions</h4>
                <p>
                    If interested in applying for the 2022-2023 or 2023-2024 school year, see below for more information. For teaching positions, all qualified candidates should have at least a Bachelor’s degree and relevant experience.
                </p>
                <h4>Teacher</h4>
                <p>
                    Kardia Classical School is seeking passionate and qualified teachers. Applicants should fully support the school’s mission, and statement of faith, and be excited about classical Christian education. We strive for excellence in all areas and seek those that possess a love for children, a love for learning, and the gift of teaching. Kardia Classical School is currently fully staffed, but will soon be looking for part-time teachers for the 2023-2024 school year. We require a teaching certificate, but it does not need to be through Washington State. Proof of certification is required. Job requirements will include teaching in person twice a week (on Wednesdays and Fridays from 8:30-4:30), planning, prepping, good classroom management skills, and more. Please apply if you are interested. You will need to submit a resume, as well as complete our teacher application (see document section below).
                </p>
                <h4>Substitute Positions</h4>
                <p>
                    Substitute teachers should have a love of Christ, and a passion for students. The substitute must be able to provide classroom instruction to students as outlined in lesson plans, create a classroom that is conducive to learning and appropriate to the maturity and interests of the students, maintain a safe and orderly environment, maintain the routines of the school and classroom procedures in which assigned, maintain a professional appearance, and take all necessary and reasonable precautions to protect the students. If interested in subbing for Kardia Classical School, email office@kardiaclassical.org with your resume, and a filled-out substitute teacher application (see documents section below). We are always hiring for this position.
                </p>
                <div id='whatIsClassical' style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} className='info-block'>
                    <h3 className='text-center pt-4'>Documents</h3>

                    <p>
                        <a href={TeacherApp} target='_blank'>Teacher Job Application
                        </a>

                        <button href={TeacherApp} download className='download-button'> (download)
                        </button>

                    </p>
                    <p>
                        <a href={SubApp} target='_blank'>Substitute Teacher Job Application
                        </a>

                        <button href={SubApp} download className='download-button'> (download)
                        </button>

                    </p>
                    <p>
                        <a href={JobDescrip} target='_blank'>Teacher Job Description
                        </a>

                        <button href={JobDescrip} download className='download-button'> (download)
                        </button>

                    </p>
                    <p>
                        <a href={Mission} target='_blank'>Mission and Statement of Faith Agreement
                        </a>

                        <button href={Mission} download className='download-button'> (download)
                        </button>

                    </p>

                </div>
            </div>
        </div>
    )
}

export default Employment