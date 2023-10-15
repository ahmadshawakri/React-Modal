import React from "react";

// Styles
import styles from "./modal.module.css";

const Modal = ({ children, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h1>30 UNDER 30: HEALTHCARE</h1>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
