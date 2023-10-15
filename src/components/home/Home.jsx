import React, { useState } from "react";

// Data
import jsonData from "../../assets/data.json";

// Components
import Modal from "../modal/Modal";

// Styles
import styles from "./home.module.scss";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (item) => {
    setClickedItem(item);
    setIsModalOpen(true);
    setCurrentIndex(item.id);
  };

  const goToNextItem = () => {
    if (currentIndex < jsonData.length - 1) {
      setClickedItem(jsonData[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevItem = () => {
    if (currentIndex > 0) {
      setClickedItem(jsonData[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      {jsonData.map((item) => (
        <div
          className={`${styles.itemWrapper} ${
            isModalOpen ? styles.heightZero : ""
          }`}
          key={item.id}
          onClick={() => openModal(item)}
        >
          <img src={item.url} alt={item.name} />
          <div>
            {item.age} | {item.title}
          </div>
          <h2>{item.name}</h2>
        </div>
      ))}

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          nextItem={goToNextItem}
          prevItem={goToPrevItem}
        >
          <div className={styles.modalItemWrapper}>
            <img src={clickedItem.url} alt={clickedItem.title} />
            <div>
              <div>
                {clickedItem.age} | {clickedItem.title}
              </div>
              <h2>{clickedItem.name}</h2>
              <p>{clickedItem.description}</p>
              <button type="button">Full Profile</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
