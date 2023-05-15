import { useDispatch, useSelector } from "react-redux";
import { onCloseModal, onOpenModal } from "../store/sign/signSlice";

export const useSignStore = () => {

    const dispatch = useDispatch();

    const { isModalOpen, signPage } = useSelector( state => state.sign );

    const openModal = ( signValue ) => {
        dispatch( onOpenModal( signValue ) );
    };

    const closeModal = () => {
        dispatch( onCloseModal() );
    };

    return {
        //* Properties
        isModalOpen,
        signPage,

        //* Methods
        openModal,
        closeModal,
    }

};