import styles from "./Projetos.module.css";

import devflix from "../../assets/devflix.png";
import aquaguar from "../../assets/aquaguardians.png";

const Projetos = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerCard}>
        <div className={styles.Bloco}>
        <div className={styles.Card1}>
          <img src={devflix} alt="" width={800} height={525} />
        </div>
        <div className={styles.Card2}>
          <img src={aquaguar} alt="" width={610} height={525} />
        </div>
        </div>
        <div className={styles.Bloco}>
          <div className={styles.Card3}>
            <img src="" alt="" width={515} height={380} />
          </div>
          <div className={styles.Card4}>
            <img src="" alt="" width={275} height={380} />
          </div>
          <div className={styles.Card5}>
            <img src="" alt="" width={610} height={380} />
          </div>
        </div>
        <div className={styles.Bloco}>
          <div className={styles.Card7}>
            <img src="" alt="" width={610} height={380} />
          </div>
          <div className={styles.Card6}>
            <img src="" alt="" width={800} height={380} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
