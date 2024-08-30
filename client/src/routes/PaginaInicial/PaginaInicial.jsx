import styles from "./PaginaInicial.module.css";

import Carousel from "../../components/Carousel/Carousel";
import Projetos from "../../components/Projetos/Projetos";

export const PaginaInicial = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerNovidades}>
        <div className={styles.Title}>
          <h2>Novidades</h2>
        </div>
        <div className={styles.Carrossel}>
          <Carousel />
        </div>
      </div>

      <div className={styles.ContainerProjetos}>
        <div className={styles.Title}>
          <h2>Projetos</h2>
        </div>
        <div className={styles.Card}>
          <Projetos />
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
