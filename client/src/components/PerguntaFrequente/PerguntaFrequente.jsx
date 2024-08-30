import styles from "./PerguntaFrequente.module.css";

const PerguntaFrequente = ({ pergunta, produto, data, problema, resposta }) => {
  return (
    <>
      <div className={styles.Card}>
        <div className="row">
          <h2 className="col-12 col-md-8 col-lg-8">{pergunta}</h2>
            <h3 className="col-4 col-md-3 col-lg-2">{produto}</h3>
            <h3 className="col-4 col-md-3 col-lg-2">{data}</h3>
            <h3 className="col-4 col-md-3 col-lg-2">{problema}</h3>
        </div>

        <div className="row">
          <p className="col-12">{resposta}</p>
        </div>
      </div>
    </>
  );
};

export default PerguntaFrequente;
