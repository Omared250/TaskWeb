import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onCloseTaskModal, onOpenDateModal, onOpenTaskModal } from "../store";


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector( state => state.ui );
    const { isTaskModalOpen } = useSelector( (state) => state.ui );

    const openTaskModal = () => {
        dispatch(onOpenTaskModal());
    }

    const closeTaskModal = () => {
        dispatch(onCloseTaskModal());
    }

    const openDateModal = () => {
        dispatch( onOpenDateModal() );
    };

    const closeDateModal = () => {
        dispatch( onCloseDateModal() );
    };

    return {
        //* Properties
        isDateModalOpen,
        isTaskModalOpen,

        //* Methods
        openDateModal,
        closeDateModal,
        closeTaskModal,
        openTaskModal,
    }

};