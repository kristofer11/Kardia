import calendar from '../assets/2022-2023-calendar.png'
import proposedCalendar from '../assets/2023-2024-Tentative-Calendar.png';
import Calendar22 from '../assets/downloads/22-23Calendar.pdf';
import Calendar23 from '../assets/downloads/23-24Calendar.pdf';

const Calendar = () => {
  return (
    <div className="page-content">
    <div id='whatIsClassical'  className='info-block text-center'>
        <h2 className='text-center' style={{fontSize: '3rem'}}>Calendar</h2>
        
            <p >
            Here is the proposed calendar for the 2023-2024 School Year! Don’t forget, we are a small school, so dates may be subject to change. However, We will give plenty of notice if anything does change. Whenever there are changes to the calendar, it will be updated here as well.<br /><strong>Click on the calendar below to <a href={Calendar23} download='2023-24 Kardia Calendar.pdf'>download</a>.</strong><br/><em>Please note that the 2023-2024 calendar is tentative at this point.</em>
            </p>  
        <div className='calendar-div'>
    
        <div>
            <p>2023-2024 (proposed)</p>
            <a href={Calendar23} download='2023-24 Kardia Calendar.pdf'><img src={proposedCalendar} className='col-10 mb-5 calendar' alt='Proposed 2023-24 calendar2' /></a>
        </div>
        </div>  
    </div>
</div>
  )
}

export default Calendar;