import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";
import Rodape from "./components/Rodape";
import "./App.css";

function App() {
  const cursos = [
    {
      nome: "Desenvolvimento de Sistemas",
      duracao: "1200 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 12
    },
    {
      nome: "Redes de Computadores",
      duracao: "1000 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 8
    },
    {
      nome: "Manutenção de Computadores",
      duracao: "800 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 5
    },
    {
      nome: "Programação Web",
      duracao: "900 horas",
      modalidade: "Online",
      nivel: "Qualificação",
      vagas: 15
    },
    {
      nome: "Banco de Dados",
      duracao: "700 horas",
      modalidade: "Online",
      nivel: "Qualificação",
      vagas: 0
    },
    {
      nome: "Desenvolvimento Mobile",
      duracao: "950 horas",
      modalidade: "Híbrida",
      nivel: "Técnico",
      vagas: 10
    }
  ];

  return (
    <>
      <Cabecalho />

      <main>
        <section className="cursos">
          <h2>Nossos Cursos</h2>

          <div className="lista-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>

        <section className="destaques">
          <h2>Por que estudar tecnologia?</h2>

          <div className="lista-destaques">
            <Destaque
              titulo="Aprenda fazendo"
              texto="Desenvolva projetos durante sua formação e coloque seus conhecimentos em prática."
            />

            <Destaque
              titulo="Prepare-se para o mercado"
              texto="Adquira conhecimentos e habilidades importantes para atuar na área de tecnologia."
            />

            <Destaque
              titulo="Construa seu futuro"
              texto="Escolha uma área de tecnologia e comece a desenvolver sua carreira profissional."
            />
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}

export default App;
