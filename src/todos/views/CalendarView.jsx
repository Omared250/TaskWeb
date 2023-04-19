import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { localizer } from '../../helpers';
import { CalendarEventBox } from '../components';

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

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'        
        };

        return {
            style
        }
    };

    return(
        <>
            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 100px)' }}
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEventBox
                }}
            />
        </>
    );
}
