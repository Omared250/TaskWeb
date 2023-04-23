import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent } from "../store/calendar/calendarSlice";

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
        } else {
            // Creating
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
        }
    };

    return {
        //* Properties
        activeEvent,
        events,


        //* Methods
        setActiveEvent,
        startSavingEvent,
    }
};
