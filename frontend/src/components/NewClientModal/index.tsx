import Modal from 'react-modal';
import { ModalContent } from '../ModalContent';

interface NewClientModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onReopenNewTaskModal:  () => Promise<void>;
}

export function NewClientModal({ isOpen, onRequestClose,onReopenNewTaskModal }: NewClientModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={onRequestClose}
                className="react-modal-close"
            >
                X
            </button>

            <ModalContent
            onRequestClose={onRequestClose}
            onReopenNewTaskModal={onReopenNewTaskModal}
            />
            
        </Modal>
    );
}