import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import enUS from 'date-fns/locale/en-US';
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';

const locales = {
    'en-US': enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [{
    title: 'Omar birthday',
    notes: 'We shoudl buy the cake',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Omar'
    }
}];

export const CalendarView = () => {
    return(
        <>
            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 100px)' }}
            />
        </>
    );
}
