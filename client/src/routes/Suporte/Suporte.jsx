import styles from "./Suporte.module.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from "@mui/material/Typography";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import PerguntaFrequente from "../../components/PerguntaFrequente/PerguntaFrequente";

export const Suporte = () => {
  return (
    <div className={styles.containerSuporte}>
      <div>
        <h1>Perguntas Frequentes</h1>

        <div>
          <Accordion
            style={{
              backgroundColor: "rgba(82, 82, 82, 0.4)",
              alignItems: "center",
              margin: "0.85rem 0rem",
            }}
          >
            <AccordionSummary
              //expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h2 style={{ padding: "0rem 1em" }}>Filtros</h2>
            </AccordionSummary>

            <AccordionDetails>
              <div className={styles.containerFiltro}>
                <div className={styles.containerFiltroDetails}>
                  <h3>Produtos</h3>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="AquaGuardians"
                  />
                  <FormControlLabel control={<Checkbox />} label="DevFlix" />
                </div>
                <div className={styles.containerFiltroDetails}>
                  <h3>Data</h3>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Mais recente"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Mais antigo"
                  />
                </div>
                <div className={styles.containerFiltroDetails}>
                  <h3>Problemas</h3>
                  <FormControlLabel control={<Checkbox />} label="Pagamento" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Modo de Uso"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Acessibilidade"
                  />
                  <FormControlLabel control={<Checkbox />} label="Outros" />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <PerguntaFrequente
            pergunta={"Como realizar o pagamento?"}
            produto={"AquaGuardians"}
            data={"Mais Recente"}
            problema={"Pagamento"}
            resposta={"Lorem ipsum e blá blá blá"}
          />
          <PerguntaFrequente
            pergunta={"Como realizar o pagamento?"}
            produto={"AquaGuardians"}
            data={"Mais Recente"}
            problema={"Pagamento"}
            resposta={"Lorem ipsum e blá blá blá"}
          />
          <PerguntaFrequente
            pergunta={"Como realizar o pagamento?"}
            produto={"AquaGuardians"}
            data={"Mais Recente"}
            problema={"Pagamento"}
            resposta={"Lorem ipsum e blá blá blá"}
          />
          <PerguntaFrequente
            pergunta={"Como realizar o pagamento?"}
            produto={"AquaGuardians"}
            data={"Mais Recente"}
            problema={"Pagamento"}
            resposta={"Lorem ipsum e blá blá blá"}
          />
        </div>
      </div>

      <div>
        <h1>Ajuda</h1>
        <div className={styles.containerDuvidas}>
          <form className={styles.formDuvidas}>
            <h1>Ainda tem dúvidas?</h1>
            <p>Entre em contato conosco!</p>
            <input type="email" placeholder="Insira seu email" />
            <input
              type="text"
              placeholder="Nos conte sua dúvida..."
              style={{ minHeight: "15rem" }}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#fff",
                fontFamily: "Montserrat",
                fontWeight: "700",
                color: "#1C1042",
                margin: "0rem 0rem 2rem 0rem",
              }}
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Suporte;
