import IntegranteEquipe from "../../components/IntegranteEquipe/IntegranteEquipe";
import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <section id="quem-somos">
      <div className={styles.sobre}>
        <div>
          <h1>Quem somos nós?</h1>
          <h2 className="col-12 col-md-12 mx-auto">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis tt exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </h2>
          <h1>Equipe</h1>
        </div>

        <div className="col-10 col-md-8 mx-auto">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <IntegranteEquipe
              nomeIntegrante={"Anelize Nardelli"}
              // img={}
              altImg={"Foto da integrante Anelize Nardelli"}
              linkIg={""}
              linkLinkedIn={""}
              linkGitHub={""}
              linkEmail={""}
              className="col-10 col-md-2"
            />
            <p
              className="col-10 col-md-8 text-center text-md-end fs-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                color: "#fff",
                maxWidth: "37rem"
              }}
            >
              Estudante, dançarina e programadora, meu nome é Anelize Nardelli,
              eu tenho 17 anos de idade e estou cursando o Ensino Médio Técnico
              em Análise e Desenvolvimento de Sistemas no SENAI Jau. Atuando
              como Líder e Gestora de Projetos da Not a Number, tenho
              experiência com gerenciamento de equipes e projetos a partir de
              metodologias ágeis. Além de tudo, sou apaixonada por tecnologia e
              tenho experiência como desenvolvedora Full Stack.
            </p>
          </div>

          <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center mt-5 mt-md-2">
            <p
              className="col-10 col-md-8 text-center text-md-start fs-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                color: "#fff",
                maxWidth: "37rem"
              }}
            >
              Tenho 17 anos. Sou apaixonado pela área da programação e estou me
              dedicando há 2 anos como estudante técnico em DS. No momento,
              minha imersão se concentra no front-end, mas busco aprender mais o
              back-end e pretendo devolver jogos futuramente. Domínio técnico:
              JavaScript, React(Vite, Next.js, React Native e React Router),
              CSS(Bootstrap, Material-UI e Tailwind), Java, python, Git, C#,
              API, .NET, MAUI(Android).
            </p>
            <IntegranteEquipe
              nomeIntegrante={"Cauã Diório"}
              // img={}
              altImg={"Foto do integrante Cauã Diório"}
              linkIg={""}
              linkLinkedIn={""}
              linkGitHub={""}
              linkEmail={""}
              className="col-10 col-md-2"
            />
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 mt-md-2">
          <IntegranteEquipe
              nomeIntegrante={"Felipe Salmazo"}
              // img={}
              altImg={"Foto do integrante Felipe Salmazo"}
              linkIg={""}
              linkLinkedIn={""}
              linkGitHub={""}
              linkEmail={""}
              className="col-10 col-md-2"
            />
            <p
              className="col-10 col-md-8 text-center text-md-end fs-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                color: "#fff",
                maxWidth: "37rem"
              }}
            >
              Felipe Salmazo, um jovem de 18 anos, desde a infância sou
              apaixonado por programação e games. Adoro a academia, tenho prazer
              em ler e explorar novas tecnologias. Embora goste de criar games,
              está sempre em busca de novos desafios e oportunidades.
              Atualmente, estou trabalhando no projeto Aquaguardians com a
              empresa Not a Number.
            </p>
          </div>

          <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center mt-5 mt-md-2">
            <p
              className="col-10 col-md-8 text-center text-md-start fs-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                color: "#fff",
                maxWidth: "37rem"
              }}
            >
              Olá, sou Gustavo, um amante da tecnologia.Como Desenvolvedor
              iniciante, tenho experiência com JavaScript, React, SQL Server,
              .NET e C#. Minha paixão pela tecnologia não se limita apenas ao
              presente, mas também molda meu futuro. No ano de 2025, planejo
              ingressar na faculdade, continuando minha jornada acadêmica na
              área de tecnologia. Estou ansioso para explorar novos horizontes e
              enfrentar desafios futuros nesta área em constante evolução.
            </p>
            <IntegranteEquipe
              nomeIntegrante={"Gustavo Lara"}
              // img={}
              altImg={"Foto do integrante Gustavo Lara"}
              linkIg={""}
              linkLinkedIn={""}
              linkGitHub={""}
              linkEmail={""}
              className="col-10 col-md-2"
            />
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 mt-md-2 mb-5">
            <IntegranteEquipe
              nomeIntegrante={"Pedro Bagarini"}
              // img={}
              altImg={"Foto do integrante Pedro Bagarini"}
              linkIg={""}
              linkLinkedIn={""}
              linkGitHub={""}
              linkEmail={""}
              className="col-10 col-md-2"
            />
            <p
              className="col-10 col-md-8 text-center text-md-end fs-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                color: "#fff",
                maxWidth: "37rem"
              }}
            >
              Olá, meu nome é Pedro e sou um estudante de tecnologia apaixonado
              por desenvolvimento. Como desenvolvedor iniciante, possuo
              experiência prática com JavaScript, React, SQL Server, .NET e C#.
              Minha paixão pela área me levou a cursar T.I. no SENAI Edward
              Savio, e agora almejo seguir carreira militar, seguindo como
              policial militar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;