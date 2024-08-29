import styles from "./Projetos.module.css";

import devflix from "../../assets/devflix.png";
import aquaguar from "../../assets/aquaguardians.png";

const Projetos = ({ desc }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerCard}>
        <div>
        <div className={styles.Card1}>
          <img src={devflix} alt={desc} width={760} height={540} />
        </div>
        <div className={styles.Card2}>
          <img src={aquaguar} alt={desc} width={490} height={460} />
        </div>
        </div>
        <div>
          <div className={styles.Card3}>
            <img src="" alt={desc} width={490} height={460} />
          </div>
          <div className={styles.Card4}>
            <img src="" alt={desc} width={490} height={460} />
          </div>
          <div className={styles.Card3}>
            <img src="" alt={desc} width={490} height={460} />
          </div>
        </div>
        <div>
          <div className={styles.Card3}>
            <img src="" alt={desc} width={490} height={460} />
          </div>
          <div className={styles.Card3}>
            <img src="" alt={desc} width={490} height={460} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
