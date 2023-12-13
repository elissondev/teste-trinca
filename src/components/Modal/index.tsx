import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss"

interface Props {
    onClose: () => void,
    children: React.ReactNode,
    title?: string
}
const Modal = ({ onClose, children, title }: Props) => {
    const handleCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className={styles.modalOverlay}>
            <div className={styles.modalWrapper}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <a href="#" onClick={(e) => handleCloseClick(e)}>
                            x
                        </a>
                    </div>
                    <span className="text-invert">{title && <h1>{title}</h1>}</span>
                    <div className={`${styles.modalBody} text-invert`}>{children}</div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as any
    );
};

export default Modal