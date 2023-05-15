import Modal from "react-modal";
import { useSignStore } from "../../hooks/useSignStore";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalLayout = ({ children, title='' }) => {

    const { isModalOpen, closeModal } = useSignStore();

    return (
      <Modal
      isOpen={ isModalOpen }
      style={ customStyles }
      onRequestClose={ closeModal }
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={ 200 }
      >
          <button className="btn--close-modal" onClick={ closeModal }>&times;</button>
          <h2 className="modal__header">
            Open your Task account <br /> 
            { title === 'Sign Up'
                ? 'In just '
                : ''
            }
            { title === 'Sign Up'
              ? <span className="highlight">1 minute</span>
              : ''
            }
          </h2>
          { children }
      </Modal>
    )
}