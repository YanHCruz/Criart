// import React from 'react';
import './Eventos.css';

// Dados estáticos para simular o Banco de dados enquanto não se cria
const listaEventos = [
    {
        id: 1,
        titulo: 'Oficina cinematográfica',
        data: 'Realizado',
        descricao: 'Oficina cinematográfica sobre o filme Lorax, com atividades, conversa, e um resumo do filme para todos conseguirem entender',
        imagem_url: '../public/img/Analise Lorax.png',
        status: 'Realizado'
    },
    {
        id: 2,
        titulo: 'Próxima Aventura (Em Breve)',
        data: 'Data a definir',
        descricao: 'Nossa equipe já está preparando o próximo encontro cheio de cores e diversão. Fique de olho para garantir sua vaga!',
        imagem_url: '../public/img/meme-teste.jpg',
        status: 'Futuro'
    }
];


export function Eventos() {

    
    // Separar os eventos realizados dos futuros
    const eventosFuturos = listaEventos.filter(eventos => eventos.status === 'Futuro');
    const eventosPassados = listaEventos.filter(eventos => eventos.status === 'Realizado');

    return (
        <section id='eventos' className = 'eventos-container'>
            <h2 className = 'titulo-secao'>Nossos Eventos</h2>

            {/* Seção 1 para eventos futuros (Aplicando umm botão para participar) */}
            <div className = 'bloco-eventos'>
                <h3 className = 'subtitulo'>O que vem por aí</h3>
                <div className = 'grid-eventos'>
                    {eventosFuturos.map((eventos) => (
                        <div key={eventos.id} className = 'card-evento futuro'>
                            <img src={eventos.imagem_url} alt={eventos.titulo} className = 'imagem-evento' />
                            <div className = 'conteudo-evento'>
                                <span className = 'tag-data'>{eventos.data}</span>
                                <h4 className = 'titulo-evento'>{eventos.titulo}</h4>
                                <p className = 'descricao-evento'>{eventos.descricao}</p>
                                {/* Botão preparado para abrir o modal de inscrição para o futuro */}
                                <button className = 'btn-participar' disabled = {eventos.data === 'Data a definir'}>
                                    {eventos.data === 'Data a definir' ? 'Aguarde...' : 'Quero participar!'}
                                </button>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>

            {/* Seção 2: Eventos Passados (Foco na história e imagem) */}
            <div className="bloco-eventos">
                <h3 className="subtitulo">Momentos Inesquecíveis</h3>
                <div className="grid-eventos">
                {eventosPassados.map((eventos) => (
                    <div key={eventos.id} className="card-evento passado">
                    <img src={eventos.imagem_url} alt={eventos.titulo} className="imagem-evento" />
                    <div className="conteudo-evento">
                        <span className="tag-data concluido">Concluído</span>
                        <h4 className="titulo-evento">{eventos.titulo}</h4>
                        <p className="descricao-evento">{eventos.descricao}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
         </section>
    
    )
}