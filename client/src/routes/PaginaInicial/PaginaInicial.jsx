import styles from "./PaginaInicial.module.css";

import Carousel from "../../components/Carousel/Carousel";

export const PaginaInicial = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerNovidades}>
        <div className={styles.Title}>
          <h1>Novidades</h1>
        </div>
        <div className={styles.Carrossel}>
          <Carousel/>
        </div>
      </div>
      <div className={styles.ContainerProjetos}>

      </div>
    </div>
  );
};

export default PaginaInicial;
