import Cards from "../../components/Cards/Cards";
import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <section id="quem-somos">
      <div className={styles.sobre}>
        <h1>Quem somos nós?</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis tt exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        </p>
        <h1>Equipe</h1>
        </div>


        <div className={styles.Equipe}>
          <div className={styles.Perfil}>
            <Cards></Cards>
            <div className={styles.Nome}>
              <p>Anelize Nardelli</p>
            </div>
            <div className={styles.Social}>
              <a className={styles.ins} href="https://www.instagram.com/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a className={styles.lin} href="https://www.linkedin.com/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a className={styles.git} href="https://github.com/">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a className={styles.email} href="https://mail.google.com//">
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </div>
          </div>

          <div className={styles.Desc}>
            <p>
              Estudante, dançarina e programadora, meu nome é Anelize Nardelli,
              eu tenho 17 anos de idade e estou cursando o Ensino Médio Técnico
              em Análise e Desenvolvimento de Sistemas no SENAI Jau. Atuando
              como Líder e Gestora de Projetos da Not a Number, tenho
              experiência com gerenciamento de equipes e projetos a partir de
              metodologias ágeis. Além de tudo, sou apaixonada por tecnologia e
              tenho experiência como desenvolvedora Full Stack.
            </p>
          </div>
        </div>

        <div className={styles.Equipe} style={{ flexDirection: "row-reverse" }}>
          <div className={styles.Perfil}>
            <Cards></Cards>
            <div className={styles.Nome}>
              <p>Cauã Diório</p>
            </div>
            <div className={styles.Social}>
              <a className={styles.ins} href="https://www.instagram.com/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a className={styles.lin} href="https://www.linkedin.com/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a className={styles.git} href="https://github.com/">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a className={styles.email} href="https://mail.google.com//">
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </div>
          </div>

          <div className={styles.Desc}>
            <p>
              Tenho 17 anos. Sou apaixonado pela área da programação e estou me
              dedicando há 2 anos como estudante técnico em DS. No momento,
              minha imersão se concentra no front-end, mas busco aprender mais o
              back-end e pretendo devolver jogos futuramente. Domínio técnico:
              JavaScript, React(Vite, Next.js, React Native e React Router),
              CSS(Bootstrap, Material-UI e Tailwind), Java, python, Git, C#,
              API, .NET, MAUI(Android).
            </p>
          </div>
        </div>

        <div className={styles.Equipe}>
          <div className={styles.Perfil}>
            <Cards></Cards>
            <div className={styles.Nome}>
              <p>Felipe Salmazo</p>
            </div>
            <div className={styles.Social}>
              <a className={styles.ins} href="https://www.instagram.com/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a className={styles.lin} href="https://www.linkedin.com/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a className={styles.git} href="https://github.com/">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a className={styles.email} href="https://mail.google.com//">
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </div>
          </div>

          <div className={styles.Desc}>
            <p>
              Felipe Salmazo, um jovem de 18 anos, desde a infância sou
              apaixonado por programação e games. Adoro a academia, tenho prazer
              em ler e explorar novas tecnologias. Embora goste de criar games,
              está sempre em busca de novos desafios e oportunidades.
              Atualmente, estou trabalhando no projeto Aquaguardians com a
              empresa Not a Number.
            </p>
          </div>
        </div>

        <div className={styles.Equipe} style={{ flexDirection: "row-reverse" }}>
          <div className={styles.Perfil}>
            <Cards></Cards>
            <div className={styles.Nome}>
              <p>Gustavo Lara</p>
            </div>
            <div className={styles.Social}>
              <a className={styles.ins} href="https://www.instagram.com/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a className={styles.lin} href="https://www.linkedin.com/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a className={styles.git} href="https://github.com/">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a className={styles.email} href="https://mail.google.com//">
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </div>
          </div>

          <div className={styles.Desc}>
            <p>
              Olá, sou Gustavo, um amante da tecnologia. Como Desenvolvedor
              iniciante, tenho experiência com JavaScript, React, SQL Server,
              .NET e C#. Minha paixão pela tecnologia não se limita apenas ao
              presente, mas também molda meu futuro. No ano de 2025, planejo
              ingressar na faculdade, continuando minha jornada acadêmica na
              área de tecnologia. Estou ansioso para explorar novos horizontes e
              enfrentar desafios futuros nesta área em constante evolução.
            </p>
          </div>
        </div>

        <div className={styles.Equipe}>
          <div className={styles.Perfil}>
            <Cards></Cards>
            <div className={styles.Nome}>
              <p>Pedro Bagarini</p>
            </div>
            <div className={styles.Social}>
              <a className={styles.ins} href="https://www.instagram.com/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a className={styles.lin} href="https://www.linkedin.com/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a className={styles.git} href="https://github.com/">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a className={styles.email} href="https://mail.google.com//">
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </div>
          </div>

          <div className={styles.Desc}>
            <p>
              Olá, meu nome é Pedro e sou um estudante de tecnologia apaixonado
              por desenvolvimento. Como desenvolvedor iniciante, possuo
              experiência prática com JavaScript, React, SQL Server, .NET e C#.
              Minha paixão pela área me levou a cursar T.I. no SENAI Edward
              Savio, e agora almejo seguir carreira militar, seguindo como
              policial militar.
            </p>
          </div>
      </div>
    </section>
  );
}

export default Sobre;
