import React from "react"; 
import styles from "./mainComponentStyles.scss";
import kitty from "./img/kitty.jpg";

export const MainComponent : React.FC = () =>  { 

  return (
    <div className={styles.mainComponent}>
        <h1 className={styles.title}>Mod 03 - Bundling Webpack </h1>
        <img src={kitty} />
        <p className={styles.parag}>Entorno: {process.env.ENV}</p>
    </div>
  );
};
