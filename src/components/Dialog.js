import './Dialog.css';
import { XCircle } from 'phosphor-react';

const Dialog = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="dialog">
            <div className="dialogContent">
                <button className="closeDialog" onClick={onClose}>
                    <XCircle size={32} />
                </button>
                {children}
            </div>
        </div>
    )
};

export default Dialog;
