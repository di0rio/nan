import styles from "./PerguntaFrequente.module.css";

const PerguntaFrequente = ({ pergunta, produto, data, problema, resposta }) => {
  return (
    <>
      <div className={styles.Card}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems:"end"
          }}
        >
          <h2>{pergunta}</h2>
          <h3>{produto}</h3>
          <h3>{data}</h3>
          <h3>{problema}</h3>
        </div>

        <div className={styles.textoCard}>
          <p>{resposta}</p>
        </div>
      </div>
    </>
  );
};

export default PerguntaFrequente;
