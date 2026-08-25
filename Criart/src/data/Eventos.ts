export interface Evento {
    id: number;
    titulo: string;
    data: string;
    descricao: string;
    imagem_url: string;
    status: string;
}

export const listaEventos: Evento[] = [
    {
        id: 1,
        titulo: 'Oficina cinematográfica',
        data: '10/03/2026',
        descricao: 'Oficina cinematográfica sobre o filme Lorax, com atividades, conversa, e um resumo do filme para todos conseguirem entender',
        imagem_url: '/img/Analise Lorax.png', 
        status: 'Realizado'
    },
    {
        id: 2,
        titulo: 'Esprosição',
        data: '14/07/2026',
        descricao: 'Uma grande exposição sobre a arte e suas muitas facetas, como cinema, música, jogos, pintura e artesanato.',
        imagem_url: '/img/Esprosição_fundo.png',
        status: 'Realizado'
    },
    {
        id: 3,
        titulo: 'Gestores do Futuro',
        data: '21/07/2026',
        descricao: 'Apresentação de futuros projetos da Criart, para outras empresas e gestores.',
        imagem_url: '/img/Gestores_futuro.png',
        status: 'Realizado'
    },
    {
        id: 4,
        titulo: 'Visista masp',
        data: 'Data a definir',
        descricao: 'Nossa equipe irá fazer uma visita ao MASP, com o objetivo de conhecer a história da arte e a importância do museu para a cultura brasileira. Durante a visita será feita uma competição de fotográfia com a equipe.',
        imagem_url: '/img/Evento_masp.png',
        status: 'Futuro'
    }
];