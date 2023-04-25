import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    };

    const startSavingEvent = async( calendarEvent ) => {

        if ( calendarEvent._id ) {
            // Updating
            dispatch( onUpdateEvent({ ...calendarEvent }) );
        } else {
            // Creating
            const { data } = await calendarApi.post( '/events', calendarEvent );
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.event.id, user }) )
        }
    };

    const startDeletingEvent = () => {
        // TODO: Llegar al backend


        dispatch( onDeleteEvent() );
    };

    const startLoadingEvents = async() => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents( data.events );
            console.log({events});
        } catch (err) {
            console.log('Loading events');
            console.log(err);
        }
    };

    return {
        //* Properties
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,


        //* Methods
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents,
    }
};
