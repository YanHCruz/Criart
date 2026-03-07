export function Sobre() {
  return (
    <section id="sobre-nos" className="sobre-section hidden-scroll">
       <div className="sobre-container">
        <div className="sobre-texto">
            <h4 className="subtitulo">NOSSA HISTÓRIA</h4>
            <h2>Mais do que arte,<br />somos <span className="destaque-text">Criart!</span></h2>

            <p>
                A missão da <strong>Criart</strong> é disseminar a cultura e arte para as outras pessoas que não tem acesso, oportunidade e incentivo.
                Promovendo inclusão, diversidade e transformação social. 
            </p>
            <p>
                Nós temos a visão de que sejamos referência na busca por novas culturas, suas artes, valores, criatividade e educação.
                Promovendo ações culturais, arrecadações para ONG’s, feira de doação
            </p>

            <div className="stats-box">
                <div className="stat">
                    <span className="numero">+500</span>
                    <span className="legenda">Jovens Felizes</span>
                </div>
                <div className="stat">
                    <span className="numero">15</span>
                    <span className="legenda">Educadores</span>
                </div>
            </div>

            <a href="#sobre-nos" className="btn-ver">Conheça a equipe</a>
        </div>

 <div className="sobre-imagens">
            <div className="foto-equipe-wrapper">
                <img src="/img/turma-toda.jpg" alt="A Equipe Criart" className="img-equipe" />
                <span className="legenda-foto">Quem faz acontecer!</span>
            </div>

            <div className="circulo-decorativo"></div>
        </div>
    </div>
    </section>
  );
}