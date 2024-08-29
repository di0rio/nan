import styles from "./Cards.module.css";

const Cards = ({ img, nome }) => {
  return (
    <div className={styles.Sobre}>
        <div className={styles.ContainerCard}>
    <div className={styles.Card}><img src= {img} alt={nome} /></div>


    </div>
  </div>
  );
};

export default Cards;