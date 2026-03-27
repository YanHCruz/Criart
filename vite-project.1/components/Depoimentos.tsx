import { useState, useEffect } from 'react';
import './Depoimentos.css';

interface IDepoimentos {
    id: number;
    nome: string;
    papel: string;
    texto: string;
    foto_url: string;
}

export function Depoimentos() {
  // Estado que guarda os depoimentos (iniciamos com os dados falsos)
  const [Depoimentos, setDepoimentos] = useState<IDepoimentos[]>([]);
  const [carregando, setCarregando] = useState(true);

    // FETCH em PHP, comentado até mais pra frente.
    useEffect(() => {
        fetch('http://localhost:5000/api/depoimentos')
        .then(resposta => resposta.json())
        .then(dados => {
            setDepoimentos(dados);
            setCarregando(false);
        })
        .catch(erro => {
            console.error('Ops! Erro ao buscar depoimentos.', erro);
            setCarregando(false);
        });
    }, []);

    return (
        <section className = 'depoimentos-container'>
            <h2 className = 'titulo-secao'>O que dizer sobre a criart</h2>

            {/* Aparece a uma mensagem enquanto efetua a busca via SQL */}
            {carregando ? (
                <p>Carregando depoimentos...</p>
            ) : (
                <div className = 'grid-depoimentos'>
                    {Depoimentos.map((item) => (
                        <div key={item.id} className = 'card-depoimento'>
                            <img src="{item.foto_url}" alt={`Foto de ${item.nome}`} className="foto-perfil" />
                            <div className="conteudo-card">
                            <p className="texto">"{item.texto}"</p>
                            <h4 className="nome">{item.nome}</h4>
                            <span className="papel">{item.papel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}