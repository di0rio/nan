import Cards from "../../components/Cards/Cards";
import styles from "./Sobre.module.css";


import React from 'react';

function Sobre() {
  return (
    <section id="quem-somos">
      <div className={styles.sobre}>
      <h2>Quem somos nós?</h2>
      <p>
        {/* Substitua o Lorem Ipsum por seu texto real */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,   
 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   

      </p>   


      <h3>Equipe</h3>
      <div className="equipe">
        <div className="membro">
          
          <p>
            Estudante, dançarina e programadora, meu nome é Anelize Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI Jau. Atuando como Líder e Gestora de Projetos da Not a Number, tenho experiência com gerenciamento de equipes e projetos a partir de metodologias ágeis. Além de tudo, sou apaixonada por tecnologia e tenho experiência como desenvolvedora Full Stack.
          </p>
          <div className="redes-sociais">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab   
 fa-github"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="far   
 fa-envelope"></i>
            </a>
          </div>
        </div>



        
        <div className="membro">
      
          <p>
            Estudante, dançarina e programadora, meu nome é Anelize Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI Jau. Atuando como Líder e Gestora de Projetos da Not a Number, tenho experiência com gerenciamento de equipes e projetos a partir de metodologias ágeis. Além de tudo, sou apaixonada por tecnologia e tenho experiência como desenvolvedora Full Stack.
          </p>
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




      <div className="membro">
          <h4>Cauã Diório</h4>
          <p>
            Estudante, dançarina e programadora, meu nome é Anelize Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI Jau. Atuando como Líder e Gestora de Projetos da Not a Number, tenho experiência com gerenciamento de equipes e projetos a partir de metodologias ágeis. Além de tudo, sou apaixonada por tecnologia e tenho experiência como desenvolvedora Full Stack.
          </p>
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




      <div className="membro">
          <h4>Cauã Diório</h4>
          <p>
            Estudante, dançarina e programadora, meu nome é Anelize Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI Jau. Atuando como Líder e Gestora de Projetos da Not a Number, tenho experiência com gerenciamento de equipes e projetos a partir de metodologias ágeis. Além de tudo, sou apaixonada por tecnologia e tenho experiência como desenvolvedora Full Stack.
          </p>
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




      <div className="membro">
          <h4>Cauã Diório</h4>
          <p>
            Estudante, dançarina e programadora, meu nome é Anelize Nardelli, eu tenho 17 anos de idade e estou cursando o Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas no SENAI Jau. Atuando como Líder e Gestora de Projetos da Not a Number, tenho experiência com gerenciamento de equipes e projetos a partir de metodologias ágeis. Além de tudo, sou apaixonada por tecnologia e tenho experiência como desenvolvedora Full Stack.
          </p>
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
    </section>
  );
}

export default Sobre;