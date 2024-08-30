import styles from "./Suporte.module.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import PerguntaFrequente from "../../components/PerguntaFrequente/PerguntaFrequente";

export const Suporte = () => {
  return (
    <div className={styles.containerPagSuporte}>
      <div className="row">
        <h1 className="col-12">Perguntas Frequentes</h1>
        <div className="col-12">
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

            <AccordionDetails
              style={{
                color: "white",
              }}
            >
              <div className={styles.containerFiltro}>
                <div className={styles.containerFiltroDetails}>
                  <h3>Produtos</h3>
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{
                          color: "white",
                        }}
                      />
                    }
                    label="AquaGuardians"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{
                          color: "white",
                        }}
                      />
                    }
                    label="DevFlix"
                  />
                </div>
                <div className={styles.containerFiltroDetails}>
                  <h3>Data</h3>
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{
                          color: "white",
                        }}
                      />
                    }
                    label="Mais recente"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{
                          color: "white",
                        }}
                      />
                    }
                    label="Mais antigo"
                  />
                </div>
                <div className={styles.containerFiltroDetails}>
                  <h3>Problemas</h3>
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{
                          color: "white",
                        }}
                      />
                    }
                    label="Pagamento"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{
                          color: "white",
                        }}
                      />
                    }
                    label="Modo de Uso"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{
                          color: "white",
                        }}
                      />
                    }
                    label="Acessibilidade"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{
                          color: "white",
                        }}
                      />
                    }
                    label="Outros"
                  />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="col-12">
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

      <div className="row" style={{ padding: "4rem 0rem 0rem 0rem" }}>
        <h1 className="cow-12">Ajuda</h1>
        <form className="col-12">
          <h1 className="col-12">Ainda tem dúvidas?</h1>
          <p className="col-12">Entre em contato conosco!</p>
          <input
            type="email"
            placeholder="Insira seu email"
            className="col-12"
            style={{
              backgroundColor:"rgba(82, 82, 82, 0.4)", borderRadius:"0.5rem", border:"1px solid #fff",
              fontSize:"14px", color:"#fff", fontFamily:"Poppins, sans-serif", fontWeight:"200",
              padding:"0.3rem", margin:"0.8rem 0rem",
              minHeight: "3rem"
            }}
          />
          <input
            type="text"
            placeholder="Nos conte sua dúvida..."
            className="col-12"
            style={{
              backgroundColor:"rgba(82, 82, 82, 0.4)", borderRadius:"0.5rem", border:"1px solid #fff",
              fontSize:"14px", color:"#fff", fontFamily:"Poppins, sans-serif", fontWeight:"200",
              padding:"0.3rem", margin:"0.8rem 0rem",
              minHeight: "15rem"
            }}
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
            className="col-12"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Suporte;
