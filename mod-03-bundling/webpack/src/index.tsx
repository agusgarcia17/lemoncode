import React from "react";
import { createRoot } from "react-dom/client";
import { MainComponent } from "./mainComponent";
import styles from "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className={styles.rootContainer}>
   <MainComponent/>
  </div>
);
