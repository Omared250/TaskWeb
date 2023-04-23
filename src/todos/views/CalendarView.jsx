import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { localizer } from '../../helpers';
import { CalendarEventBox, CalendarModal } from '../components';
import { useState } from 'react';
import { useUiStore, useCalendarStore } from '../../hooks';


export const CalendarView = () => {

    const { openDateModal } = useUiStore();
    const { events } = useCalendarStore();

    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'week' )

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

    const onDoubleClick = () => {
        openDateModal();
    };    
    
    const onSelect = ( event ) => {
        console.log({ click: event });
    };

    const onViewChanged = ( event ) => {
        localStorage.setItem( 'lastView', event );
        setLastView( event );
    };

    return(
        <>
            <Calendar
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 150px)' }}
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEventBox
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChanged }
            />

            <CalendarModal />
        </>
    );
}
