export function Inicio() {
    return (
        <section id = 'inicio' className = 'hero-container'>
            <div className = 'container-hero'>
                <div className = 'hero-text'>
                    <h1>Vem ser
                        <span className="c-blue">C</span><span className="c-orange">R</span><span className="c-gray">I</span><span className="c-yellow">A</span><span className="c-green">R</span><span className="c-dblue">T</span>                       
                    </h1>
                    <p>Somos um espaço de arte, jogos e eventos dedicado a fazer a infância mais feliz e colorida. 
                        Conheça nossos projetos e junte-se a nós!
                    </p>
                    {/* Href diferente para apontar apontar para a seção sobre */}
                    <a href = '#sobre-nos' className = 'btn-ver'>Ver mais</a>
                </div>

                <div className = 'hero-image'>
                    <img src = '../public/img/fotos-crianças-criart.png' alt = 'crianças criart' />
                </div>
            </div>

            {/* Aqui embaixo entrará as ondas */}

           <div className="wave-container">
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
    <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g className="parallax">
    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
    </g>
    </svg>
</div>
        </section>
    );
}

