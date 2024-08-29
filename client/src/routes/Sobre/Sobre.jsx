import Cards from "../../components/Cards/Cards";
import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <section id="quem-somos">
      <div className={styles.sobre}>
        <h2>Quem somos nós?</h2>
        <p>APRESENTAÇÃO</p>
        <h3>Equipe</h3>

        <div className="equipe">



          <div className="membro">
            <div className={styles.Card1}>
              <Cards></Cards>
              <h4>Anelize</h4>
              <p>
                Estudante, dançarina e programadora, meu nome é Anelize
                Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino
                Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI
                Jau. Atuando como Líder e Gestora de Projetos da Not a Number,
                tenho experiência com gerenciamento de equipes e projetos a
                partir de metodologias ágeis. Além de tudo, sou apaixonada por
                tecnologia e tenho experiência como desenvolvedora Full Stack.
              </p>
              <div></div>
              <div className={styles.Social1}>
                <a className={styles.ins} href="https://www.instagram.com/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a className={styles.lin} href="https://www.linkedin.com/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a className={styles.git} href="https://github.com/">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
          </div>





       
            <div className={styles.Card2}>
              <Cards></Cards>
              <h4>Cauã Diório</h4>
              <p>
                Estudante, dançarina e programadora, meu nome é Anelize
                Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino
                Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI
                Jau. Atuando como Líder e Gestora de Projetos da Not a Number,
                tenho experiência com gerenciamento de equipes e projetos a
                partir de metodologias ágeis. Além de tudo, sou apaixonada por
                tecnologia e tenho experiência como desenvolvedora Full Stack.
              </p>
              <div>
              </div>
              <div className={styles.Social1}>
                <a className={styles.ins} href="https://www.instagram.com/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a className={styles.lin} href="https://www.linkedin.com/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a className={styles.git} href="https://github.com/">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            
          </div>





         
            {/* <div className={styles.Card3}>
              <Cards></Cards>
              <h4>Felipe Salmazo</h4>
              <p>
                Estudante, dançarina e programadora, meu nome é Anelize
                Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino
                Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI
                Jau. Atuando como Líder e Gestora de Projetos da Not a Number,
                tenho experiência com gerenciamento de equipes e projetos a
                partir de metodologias ágeis. Além de tudo, sou apaixonada por
                tecnologia e tenho experiência como desenvolvedora Full Stack.
              </p>
              <div></div>
              <div className={styles.Social1}>
                <a className={styles.ins} href="https://www.instagram.com/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a className={styles.lin} href="https://www.linkedin.com/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a className={styles.git} href="https://github.com/">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
      
          




            <div className={styles.Card4}>
              <Cards></Cards>
              <h4>Gustavo Menegassi Lara</h4>
              <p>
                Estudante, dançarina e programadora, meu nome é Anelize
                Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino
                Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI
                Jau. Atuando como Líder e Gestora de Projetos da Not a Number,
                tenho experiência com gerenciamento de equipes e projetos a
                partir de metodologias ágeis. Além de tudo, sou apaixonada por
                tecnologia e tenho experiência como desenvolvedora Full Stack.
              </p>
              <div></div>
              <div className={styles.Social1}>
                <a className={styles.ins} href="https://www.instagram.com/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a className={styles.lin} href="https://www.linkedin.com/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a className={styles.git} href="https://github.com/">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>




            <div className={styles.Card5}>
              <Cards></Cards>
              <h4>Pedro Gonçalves Bagarini</h4>
              <p>
                Estudante, dançarina e programadora, meu nome é Anelize
                Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino
                Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI
                Jau. Atuando como Líder e Gestora de Projetos da Not a Number,
                tenho experiência com gerenciamento de equipes e projetos a
                partir de metodologias ágeis. Além de tudo, sou apaixonada por
                tecnologia e tenho experiência como desenvolvedora Full Stack.
              </p>
              <div></div>
              <div className={styles.Social1}>
                <a className={styles.ins} href="https://www.instagram.com/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a className={styles.lin} href="https://www.linkedin.com/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a className={styles.git} href="https://github.com/">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div> */}
          </div>
        </div>
    </section>
  );
}

export default Sobre;
