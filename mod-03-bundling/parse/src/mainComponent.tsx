import React from "react"; 
import * as styles from "./mainComponentStyles.scss";
import kitty from "./img/kitty.jpg";

export const MainComponent : React.FC = () =>  { 

  return (
    <div className={styles.maincomponent}>
        <h1 className={styles.title}>Mod 03 - Bundling Webpack </h1>
        <img src={kitty} /> 
    </div>
  );
};
