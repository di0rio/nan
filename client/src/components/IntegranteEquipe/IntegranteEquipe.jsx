import styles from "./IntegranteEquipe.module.css";

const IntegranteEquipe = ({ img, altImg, nomeIntegrante, linkIg, linkLinkedIn, linkGitHub, linkEmail }) => {
  return (
    <div>
      <div className={styles.Foto}>
        <img src={img} alt={altImg} />
        <div className={styles.boxNome}>{nomeIntegrante}</div>
      </div>
      <div className={styles.social}>
        <a href={linkIg}>
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href={linkLinkedIn}>
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href={linkGitHub}>
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href={linkEmail}>
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default IntegranteEquipe;
