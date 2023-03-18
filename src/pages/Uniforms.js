import uniforms from '../assets/Uniform-Policy-2023-2024-1187x1536.png'

const Uniforms = () => {
  return (
    <div className="page-content">
    <div id='whatIsClassical'  className='info-block text-center'>
        <h2 className='text-center' style={{fontSize: '3rem'}}>Uniforms</h2>

        <p >
        We will be sticking with the uniform tradition for our in-person days. This year, students will be required to wear formal and daily uniform items. Logo items will be available to order throughout the year. Please see the uniform policy below for more specific information and where to order logo items. Click <a href='http://www.schoolbelles.com/myschool/M37/s2950'>HERE</a> to be relocated to our School Belles uniform page. Our school code is S2950. There are several required items from School Belles.
        </p>
        <img style={{maxWidth: '100%', marginBottom: '1rem'}} src={uniforms} className='col-8' alt='document explaining Kardia uniform policy' />
        <p>These are the uniform requirements for the 2023-2024 school year. Please note that there are several changes.</p>
    </div>
</div>  )
}

export default Uniforms