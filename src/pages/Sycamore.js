import sycamore from '../assets/typing.jpeg'

const Sycamore = () => {
  return (
    <div className="page-content">
    <div id='whatIsClassical'  className='info-block text-center'>
        <h2 className='text-center' style={{fontSize: '3rem'}}>Sycamore Login</h2>
        <img src={sycamore} className='col-4 mb-5 mt-4' alt='Sycamore logo (white leaf on red background)' />        
        <p>
            To login to your family account, click <a href='https://app.sycamoreschool.com/index.php' target='_blank'>HERE</a>. Our school code is 4125. You should have been assigned a username and temporary password to start your account. Email office@kardiaclassical.org if you have any questions or need your login information.
        </p>
    </div>
</div>
  )
}

export default Sycamore