import { useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Modal from '@mui/material/Modal';
import { motion } from "framer-motion";

interface EventoProps {
    img: string;
    titulo: string;
    altura: number;
}

// Teste de imagens (Como se tivesse vindo do Python)
const fotosDosEventos = [
    { img: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa', titulo: 'Workshop de React', altura: 300 },
    { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952', titulo: 'Palestra de Design', altura: 400 },
    { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', titulo: 'Formatura 2025', altura: 250 },
    { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978', titulo: 'Reunião de Equipe', altura: 350 },
    { img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644', titulo: 'Hackathon Criart', altura: 200 },
    { img: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7', titulo: 'Apresentação de Projetos', altura: 450 },
    { img: '/img/turma-toda.jpg', titulo: 'Equipe toda', altura: 380 }, // Testado para quando for adicionar as fotos reais

];

export function Galeria() {
    // Estado para controlar a foto expandida no modal.
    const [FotoExpandida, setFotoExpandida] = useState<EventoProps | null>(null);

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: '40px 20px'}} id="eventos">
        <h2 className = 'titulo-secao'> Nossa Galeria de Eventos</h2>
        
        {/* Coluna para celular, tablets, pc e monitores */}
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
       
       {fotosDosEventos.map((item, index) => (

        // Animação de fade-in e slide-up para cada imagem.
        <motion.div 
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport= {{ once: true }}
        >

            <ImagemComHover item={item} aoClicar={() => setFotoExpandida(item)} />
        </motion.div>
))}
        </Masonry>

    {/* Modal para mostrar a foto em tela cheia */}
    <Modal
    open={!!FotoExpandida} 
    onClose={() => setFotoExpandida(null)} // Irá fechar ao clicar fora ou no X
    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >

        <motion.div
        // Animação de zoom 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ position: 'relative', outline: 'none' }}
        >
            {FotoExpandida && (
                <>
                {/* Botão para fechar */}
                <button
                onClick={() => setFotoExpandida(null)}
                style={{
                   position: 'absolute',
                   top: '-40px',
                   right: '0',
                   background: 'none',
                   border: 'none',
                   color: 'white',
                   fontSize: '30px',
                   cursor: 'pointer' 
                }}
                >
                    &times;
                </button>

                <img
                src={`${FotoExpandida.img}?w=1200&auto=format`}
                alt={FotoExpandida.titulo}
                style={{
                    maxWidth: '90vw',
                    maxHeight: '85vh',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    objectFit: 'contain'
                }}
                />
                <div style={{ textAlign: 'center', color: 'white', marginTop: '10px', fontSize: '10px' }}>
                    {FotoExpandida.titulo}
                </div>
                </>
            )}
        </motion.div>
    </Modal>

    </Box>
  );
}

// Sub-componente atualizado para receber a função de clique
function ImagemComHover({ item, aoClicar }: { item: EventoProps, aoClicar: () => void }) {
    const [MouseEmCima, setMouseEmCima] = useState(false);

    return (
        <div
            style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', cursor: 'pointer' }}
            onMouseEnter={() => setMouseEmCima(true)}
            onMouseLeave={() => setMouseEmCima(false)}
            onClick={aoClicar}
            >
                <img
                    src= {`${item.img}?w=400&auto=format`}
                    alt={item.titulo}
                    loading='lazy'
                    style={{
                        display: 'block',
                        width: '100%',
                        height: item.altura,
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        transform: MouseEmCima ? 'scale(1.08)' : 'scale(1)',
                    }}
                />
                    

                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '15px',
                        transform: MouseEmCima ? 'translateY(0)' : 'translateY(100)',
                        transition: 'transform 0.3s ease',
                        fontFamily: 'sans-serif',
                        textAlign: 'center'
                    }}>
                        <strong style={{ display: 'block', fontSize: '16px' }}>{item.titulo}</strong>
                        <span style={{ fontSize: '12px', color: '#FFA500' }}>Clique para ver mais</span>
                    </div>
            </div>
    )
}