import calendar from '../assets/2022-2023-calendar.png'
import proposedCalendar from '../assets/2023-2024-Tentative-Calendar.png';

const Calendar = () => {
  return (
    <div className="page-content">
    <div id='whatIsClassical'  className='info-block text-center'>
        <h2 className='text-center' style={{fontSize: '3rem'}}>Calendar</h2>

        <p >
        Here is the calendar for the 2022-2023 School Year! Don’t forget, we are a small school, so dates may be subject to change. However, We will give plenty of notice if anything does change. Whenever there are changes to the calendar, it will be updated here as well.
        </p>        
        <img src={calendar} className='col-10 mb-5' style={{maxWidth: '777px'}} alt='2022-23 calendar' />
        <p>Here is the proposed calendar for the 2023-2024 school year.</p>
        <img src={proposedCalendar} className='col-10 mb-5' style={{maxWidth: '777px'}} alt='Proposed 2023-24 calendar' />
    </div>
</div>
  )
}

export default Calendar