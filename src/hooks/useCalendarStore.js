import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar )

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    };

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend

        //* everything ok
        if ( calendarEvent._id ) {
            // Updating
            dispatch( onUpdateEvent({ ...calendarEvent }) );
        } else {
            // Creating
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
        }
    };

    const startDeletingEvent = () => {
        // TODO: Llegar al backend


        dispatch( onDeleteEvent() );
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
    }
};
