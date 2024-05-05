import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { localizer } from '../../helpers';
import { CalendarEventBox, CalendarModal, FloattingActionAddButton, FloattingActionDeleteButton } from '../components';
import { useEffect, useState } from 'react';
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';


export const CalendarView = () => {

    const { user } = useAuthStore();
    const { openDateModal } = useUiStore();
    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'month' )

    // Filter the events to include only those belonging to the logged-in user
    const myEvents = events.filter(event => (user.uid === event.user._id) || (user.uid === event.user.uid));

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
        setActiveEvent( event )
    };

    const onViewChanged = ( event ) => {
        localStorage.setItem( 'lastView', event );
        setLastView( event );
    };

    useEffect(() => {
        startLoadingEvents();
    }, [])
    

    return(
        <>
            <Calendar
                localizer={ localizer }
                events={ myEvents }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 150px)', fontSize: 'large'}}
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEventBox
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChanged }
            />

            <CalendarModal />
            <FloattingActionAddButton />
            <FloattingActionDeleteButton />
        </>
    );
}
