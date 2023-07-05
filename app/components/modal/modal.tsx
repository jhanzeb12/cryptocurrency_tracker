export type IModalProps = {
    children: any;
    isOpen: boolean;
    onClose?: () => void;
    closeBtnText?: string;
    onCancel?: () => void;
}

const Modal = ({ children, isOpen, onClose, onCancel, closeBtnText }: IModalProps) => {
    return (
        <dialog open={isOpen} id="basic_modal" className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                {children}
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn" onClick={onCancel}>Cancel</button>
                    <button className="btn" onClick={onClose}>{closeBtnText}</button>
                </div>
            </form>
        </dialog>
    );
}

Modal.defaultProps = {
    children: null,
    isOpen: false,
    onClose: null,
    onCancel: null,
    closeBtnText: 'Close',
};

export default Modal;