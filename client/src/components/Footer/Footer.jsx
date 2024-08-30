import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3>Info</h3>
            <ul>
              <li>Formatos</li>
              <li>Compressão</li>
              <li>Preços</li>
              <li>Status</li>
              <li>Política</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>Iniciando</h3>
            <ul>
              <li>Documentação</li>
              <li>Uso</li>
              <li>Elementos</li>
              <li>Global</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>Recursos</h3>
            <ul>
              <li>API</li>
              <li>Acessibilidade</li>
              <li>Loja</li>
              <li>Global</li>
              <li>Visibilidade</li>
              <li>Comunidade</li>
              <li>Forms de Validação</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>Notícias</h3>
            <p>
              Receba atualizações semanalmente sobre nosso jogo, além de ficar
              por dentro de todas as novidades tecnológicas.
            </p>
            <div className={styles.submeter}>
              <form className={styles.formulario}>
                <input
                  className={styles.email}
                  type="email"
                  placeholder="Seu email"
                />

                <button type="submit" className="enviar">
                  Inscreva-se
                </button>
              </form>
            </div>
            <div>
            <a  className={styles.ins}  href="https://www.instagram.com/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a  className={styles.lin} href="https://www.linkedin.com/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a  className={styles.git} href="https://github.com/">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
