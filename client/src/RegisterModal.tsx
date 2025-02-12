import Modal from 'react-modal';
import RegisterForm from './RegisterForm';

Modal.setAppElement('#root');

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Register Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <RegisterForm onClose={onClose} />
      </Modal>
    );
  };

  export default RegisterModal;