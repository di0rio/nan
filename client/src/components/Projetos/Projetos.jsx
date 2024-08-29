import styles from "./Projetos.module.css";

const Projetos = ({ img, desc }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerCard}>
        <div className={styles.Card}><img src={img} alt={desc} width={490} height={460}/></div>
      </div>
      </div>
  );
};

export default Projetos;
