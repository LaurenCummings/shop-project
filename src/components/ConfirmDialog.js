import './ConfirmDialog.css';

const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div>
            {isOpen && (
                <div className="confirmDialog">
                    <h3>{title}</h3>
                    <p>{message}</p>
                    <button onClick={() => { onConfirm(); }}>Delete Item</button>
                    <button onClick={() => { onCancel(); }}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default ConfirmDialog;