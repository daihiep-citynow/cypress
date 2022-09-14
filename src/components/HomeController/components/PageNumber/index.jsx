// libs
import React, { useContext } from "react";
// context
import { PageContext } from "@/contexts/pageContext";
// others
import styles from "./PageNumber.module.scss";

const PageNumber = () => {
  const { page } = useContext(PageContext);

  return (
    <div className={styles["page-number-wrapper"]}>
      <span>PAGE: </span>
      <span data-testid="page-number">{page}</span>/<span>3</span>
    </div>
  );
};

export default PageNumber;
