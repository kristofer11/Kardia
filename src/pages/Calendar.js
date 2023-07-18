import calendar from '../assets/2022-2023-calendar.png'
import proposedCalendar from '../assets/2023-2024-Tentative-Calendar.png';
import Calendar22 from '../assets/downloads/22-23Calendar.pdf';
import CalendarImg2023 from '../assets/Calendar 2023-2024.png'
import Calendar23 from '../assets/downloads/Calendar-2023-2024.pdf';

const Calendar = () => {
  return (
    <div className="page-content">
    <div id='whatIsClassical'  className='info-block text-center'>
        <h2 className='text-center' style={{fontSize: '3rem'}}>Calendar</h2>
        
            <p >
            Here is the calendar for the 2023-2024 School Year! Please keep in mind that dates are subject to change, however, we will give plenty of notice if anything needs to be adjusted. Whenever there are changes to the calendar, it will be updated here as well.<br /><strong>Click on the calendar below to <a href={Calendar23} download='2023-24 Kardia Calendar.pdf'>download</a>.</strong>
            </p>  
        <div className='calendar-div'>
    
        <div>
            <p>2023-2024</p>
            <a href={Calendar23} download='2023-24 Kardia Calendar.pdf'><img src={CalendarImg2023} className='col-10 mb-5 calendar' alt='Proposed 2023-24 school calendar with option to download' /></a>
        </div>
        </div>  
    </div>
</div>
  )
}

export default Calendar;