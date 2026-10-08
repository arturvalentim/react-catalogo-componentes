function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <article className="card-curso">
      <h2>{nome}</h2>

      <p>
        <strong>Duração:</strong> {duracao}
      </p>

      <p>
        <strong>Modalidade:</strong> {modalidade}
      </p>

      <p>
        <strong>Nível:</strong> {nivel}
      </p>

      <p className={vagas > 0 ? "vagas-disponiveis" : "turma-completa"}>
        {vagas > 0
          ? `Vagas disponíveis: ${vagas}`
          : "Turma completa"}
      </p>
    </article>
  );
}

export default CardCurso;