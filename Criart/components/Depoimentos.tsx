import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Depoimentos.css';

interface IDepoimentos {
    id: number;
    nome: string;
    papel: string;
    texto: string;
    foto_url: string;
}

export function Depoimentos() {
  const [Depoimentos, setDepoimentos] = useState<IDepoimentos[]>([]);
  const [carregando, setCarregando] = useState(true);

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
        <section className='depoimentos-container'>
            <h2 className='titulo-secao'>O que dizer sobre a criart</h2>

            {carregando ? (
                <p>Carregando depoimentos...</p>
            ) : (
                <div className='grid-depoimentos'>
                    {Depoimentos.map((item) => (
                        // A animação fica toda concentrada no card principal
                        <motion.div 
                            key={item.id} 
                            className='card-depoimento'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)'
                            }}
                        >   
                            {/* Correção das aspas na imagem */}
                            <img src={item.foto_url} alt={`Foto de ${item.nome}`} className="foto-perfil" />
                            
                            {/* O conteúdo interno volta a ser uma div normal */}
                            <div className="conteudo-card">
                                <p className="texto">"{item.texto}"</p>
                                <h4 className="nome">{item.nome}</h4>
                                <span className="papel">{item.papel}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
}