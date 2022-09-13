// libs
import React, { useState } from "react";
// others
import styles from "./PageNumber.module.scss";

const PageNumber = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles["page-number-wrapper"]}>
      <span>PAGE: </span>
      <span>{currentPage}</span>/<span>3</span>
    </div>
  );
};

export default PageNumber;
