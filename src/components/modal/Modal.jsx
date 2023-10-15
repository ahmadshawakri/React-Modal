import React from "react";

// Styles
import styles from "./modal.module.scss";

const Modal = ({ children, isOpen, closeModal, nextItem, prevItem }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h1>30 UNDER 30: HEALTHCARE</h1>
          <div className={styles.icons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              onClick={prevItem}
            >
              <path
                d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
                data-name="4-Arrow Left"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              onClick={nextItem}
            >
              <path
                d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                data-name="3-Arrow Right"
              />
            </svg>
            <svg
              class="close_svg__fs-icon close_svg__fs-icon--close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={closeModal}
            >
              <path d="M5.05 3.636 16.364 14.95l-1.414 1.414L3.636 5.05z"></path>
              <path d="M16.364 5.05 5.05 16.364 3.636 14.95 14.95 3.636z"></path>
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
