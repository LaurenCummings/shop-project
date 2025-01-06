import './Dialog.css';

const Dialog = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="dialog">
            <div className="dialogContent">
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    )
};

export default Dialog;
