import React from 'react';

export function Cabecalho() {

    // Função de rolagem (mantida igualzinho como você fez)
    const rolarParaSecao = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault(); 

        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className="logo">
                 <img src="/img/Logo nova_criart.png" alt="logo criart" style={{ width: '80px' }} />
            </div>

            <nav>
                <ul>
                    {/* Navegação suave com onClick */}
                    <li>
                        <a href='#inicio' onClick={(e) => rolarParaSecao(e, 'inicio')}>Início</a>
                    </li>
                    <li>
                        <a href='#sobre-nos' onClick={(e) => rolarParaSecao(e, 'sobre-nos')}>Sobre nós</a>
                    </li>
                    <li>
                        <a href='#eventos' onClick={(e) => rolarParaSecao(e, 'eventos')}>Eventos</a>
                    </li>
                    <li>
                        <a href='#galeria' onClick={(e) => rolarParaSecao(e, 'galeria')}>Galeria</a>
                    </li> 
                    <li>
                        <a href='#jornal' onClick={(e) => rolarParaSecao(e, 'jornal')}>Jornal</a>
                    </li>
                </ul>
            </nav>
        
            <div className='header-container'>
                {/* Barra de Pesquisa */}
                <form className="form">
                    <button>
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <input className="input" placeholder="Type your text" required type="text" />
                    <button className="reset" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>
                
                {/* 
                  Caso queira colocar as redes sociais da Criart 
                  ou um botão de "Fale Conosco" aqui, este é o lugar ideal, 
                  já que removemos o ícone de perfil.
                */}
            </div>
        </header>       
    );
}