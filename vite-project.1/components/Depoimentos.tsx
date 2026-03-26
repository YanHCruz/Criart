import { useState, useEffect } from 'react';
import './Depoimentos.css';

// Se caso for preciso adicionar mais depoimentos, já foi feito o teste e só copiar e adicionar as informações necessárias, enquanto não houver o banco.
const dadosEstaticos = [
    {
        id: 1,
        nome: "Ana Souza",
        papel: 'Mãe do aluno',
        texto: 'O projeto Criart mudou a vida do meu filho! Ele está muito mais comunicativo e adora as aulas de pintura.',
        foto_url: 'https://via.placeholder.com/80/FFB6C1/000000?text=Ana'
    },
    {
        id: 2,
        nome: "Carlos Mendes",
        papel: "Educador Voluntário",
        texto: 'Fazer parte dessa equipe há 2 anos tem sido a experiência mais gratificante da minha vida. A energia das crianças é contagiante.',
        foto_url: 'https://via.placeholder.com/80/ADD8E6/000000?text=Carlos'
    },
    {
        id: 3,
        nome: 'Mariana',
        papel: 'Aluna (10 anos)',
        texto: 'Eu amo brincar e desenhar aqui! Meus amigos são muito legais e os professores também.',
        foto_url: 'https://via.placeholder.com/80/90EE90/000000?text=Mari'
    },
];

export function Depoimentos() {
  // Estado que guarda os depoimentos (iniciamos com os dados falsos)
  const [Depoimentos, setDepoimentos] = useState(dadosEstaticos);

    // FETCH em PHP, comentado até mais pra frente.
    useEffect(() => {
        fetch('http://localhost/criart/api/get_depoimentos.php')
        .then(Response => Response.json())
        .then(data => setDepoimentos(data))
        .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    return (
        <section className='depoimentos-container'>
            <h2 className='titulo-secao'>O que dizem sobre o Criart</h2>

            <div className='grid-depoimentos'>
                {Depoimentos.map((item) => (
                    <div key={item.id} className='card-depoimento'>
                        <img 
                        src={item.foto_url} 
                        alt={`Foto de ${item.nome}`} 
                        className='foto-perfil' />

                        <div className='conteudo-card'>
                            <p className='texto'>{item.texto}</p>
                            <h4 className='nome'>{item.nome}</h4>
                            <span className='papel'>{item.papel}</span>
                        </div>
                    </div>
                ))}
                </div>
        </section>
    );
}