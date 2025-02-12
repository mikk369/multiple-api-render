import Modal from 'react-modal';
import LoginForm from './LoginForm';

Modal.setAppElement('#root');

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Register Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <LoginForm onClose={onClose} />
      </Modal>
    );
  };

  export default LoginModal;