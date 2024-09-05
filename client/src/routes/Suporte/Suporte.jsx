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
        <h1 className="col-12 mx-auto">Perguntas Frequentes</h1>
        <div className="col-12 mx-auto">
          <Accordion
            style={{
              backgroundColor: "rgba(82, 82, 82, 0.4)",
              alignItems: "center",
            }}
          >
            <AccordionSummary
              //expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h2 className="mb-0">Filtros</h2>
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

        <div className="col-12 mx-auto">
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

      <div className="row">
        <h1 className="col-12 mx-auto">Ajuda</h1>
        <form
          className="col-12 mx-auto d-flex flex-column"
          style={{backgroundColor: "rgba(82, 82, 82, 0.4)", borderRadius: "0.4rem", padding:"0rem 4rem 2.75rem 4rem", alignItems:"center", justifyContent:"center", maxWidth:"45rem", marginBottom:"4rem"
          }}>
            <h1 className="col-12 mx-auto">Ainda tem dúvidas?</h1>
              <p
              className="col-12 mx-auto"
              style={{
                fontSize: "12px", color:"#fff", fontFamily:"Poppins, sans-serif", fontWeight:"200"}}
              >Entre em contato conosco!</p>
            <input
              type="email"
              placeholder="Insira seu email"
              className="col-12"
              style={{
                backgroundColor:"rgba(82, 82, 82, 0.4)", borderRadius:"0.5rem", border:"1px solid rgba(255, 255, 255, 0.4)",
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
                backgroundColor:"rgba(82, 82, 82, 0.4)", borderRadius:"0.5rem", border:"1px solid rgba(255, 255, 255, 0.4)",
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
                maxWidth:"7rem"
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
