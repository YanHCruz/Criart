// import React from 'react';
import { listaEventos } from '../src/data/Eventos';
import './Eventos.css';

export function Eventos() {
    
    const eventosFuturos = listaEventos.filter(evento => evento.status === 'Futuro');
    const eventosPassados = listaEventos.filter(evento => evento.status === 'Realizado');

    return (
        <section id='eventos' className='eventos-container'>
            <h2 className='titulo-secao'>Nossos Eventos</h2>

            {/* Seção 1 para eventos futuros */}
            <div className='bloco-eventos'>
                <h3 className='subtitulo'>O que vem por aí</h3>
                <div className='grid-eventos'>
                    {eventosFuturos.map((evento) => (
                        <div key={evento.id} className='card-evento futuro'>
                            <img src={evento.imagem_url} alt={evento.titulo} className='imagem-evento' />
                            <div className='conteudo-evento'>
                                <span className='tag-data'>{evento.data}</span>
                                <h4 className='titulo-evento'>{evento.titulo}</h4>
                                <p className='descricao-evento'>{evento.descricao}</p>
                                <button className='btn-participar' disabled={evento.data === 'Data a definir'}>
                                    {evento.data === 'Data a definir' ? 'Aguarde...' : 'Saiba mais!'}
                                </button>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>

            {/* Seção 2: Eventos Passados */}
            <div className="bloco-eventos">
                <h3 className="subtitulo">Momentos Inesquecíveis</h3>
                <div className="grid-eventos">
                {eventosPassados.map((evento) => (
                    <div key={evento.id} className="card-evento passado">
                    <img src={evento.imagem_url} alt={evento.titulo} className="imagem-evento" />
                    <div className="conteudo-evento">
                        <span className="tag-data concluido">Concluído</span>
                        <h4 className="titulo-evento">{evento.titulo}</h4>
                        <p className="descricao-evento">{evento.descricao}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
         </section>
    );
}