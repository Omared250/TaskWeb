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

    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'week' )

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid );

        const style = {
            backgroundColor: isMyEvent ? '#347CF7' : '#FC5834',
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
            <FloattingActionAddButton />
            <FloattingActionDeleteButton />
        </>
    );
}
