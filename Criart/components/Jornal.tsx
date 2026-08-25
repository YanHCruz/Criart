import { useState } from 'react';

// Se for preciso adicionar uma página ou jornal novo, basta adicionar o caminho da imagem no array abaixo.
export function Jornal() {
    const paginas = [
        "/img/Jornal1.png",
        "/img/Jornal2.png"
    ];

    const [paginaAtual, setPaginaAtual] = useState(0);

    const irParaProxima = () => {
        if (paginaAtual < paginas.length - 1) {
            setPaginaAtual(paginaAtual + 1);
        }
    };

    const irParaAnterior = () => {
        if (paginaAtual > 0) {
            setPaginaAtual(paginaAtual - 1);
        }
    };

    return (
        <section id="jornal" style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
            <h2>Jornal Digital Criart</h2>
            <p style={{ marginBottom: '30px', color: '#666' }}>Navegue pelas páginas da nossa última edição.</p>

            {/* Container principal do Leitor */}
            <div style={{ 
                maxWidth: '700px', 
                margin: '0 auto', 
                backgroundColor: '#fff',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                borderRadius: '8px'
            }}>
                
                {/* Controles Superiores (Página atual e total) */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ fontWeight: 'bold', color: '#333' }}>
                        Página {paginaAtual + 1} de {paginas.length}
                    </span>
                    <a href="/Jornal/Jornal_Criart.pdf" download style={{ color: '#FFA500', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
                        Baixar PDF
                    </a>
                </div>

                {/* Exibição da Página */}
                <div style={{ border: '1px solid #eee', borderRadius: '4px', overflow: 'hidden' }}>
                    <img 
                        src={paginas[paginaAtual]} 
                        alt={`Página ${paginaAtual + 1}`} 
                        style={{ width: '100%', display: 'block', maxHeight: '80vh', objectFit: 'contain' }} 
                    />
                </div>

                {/* Botões de Navegação */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <button 
                        onClick={irParaAnterior} 
                        disabled={paginaAtual === 0}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: paginaAtual === 0 ? '#ccc' : '#FFA500',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: paginaAtual === 0 ? 'not-allowed' : 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        &laquo; Anterior
                    </button>
                    
                    <button 
                        onClick={irParaProxima} 
                        disabled={paginaAtual === paginas.length - 1}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: paginaAtual === paginas.length - 1 ? '#ccc' : '#FFA500',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: paginaAtual === paginas.length - 1 ? 'not-allowed' : 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Próxima &raquo;
                    </button>
                </div>

            </div>
        </section>
    );
}