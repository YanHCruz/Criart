import { useState } from 'react';
import { ModalLogin } from './ModalLogin';
import Avatar from '@mui/material/Avatar';

export function Cabecalho() {
    const [modalAberto, setModalAberto] = useState(false);

        // Estado para guardar alguns dados do usuário.
    const [nome, setNome] = useState<string | null>(() => localStorage.getItem('usuarioNome'));
    const [foto, setFoto] = useState<string | null>(() => localStorage.getItem('usuarioFoto'));

    const checarLogin = () => {
        const nomeSalvo = localStorage.getItem('usuarioNome');
        const fotoSalva = localStorage.getItem('usuarioFoto');
        setNome(nomeSalvo);
        setFoto(fotoSalva);
    };

    // Função que será utilizada para pegar a primeira inicial do nome do usuário para a foto.

    const pegarInicial = (nomeCompleto: string) => {
        return nomeCompleto.charAt(0).toUpperCase();
    };

    // Função para LogOut
    const fazerLogout = () => {
        localStorage.clear();
        setNome(null);
        setFoto(null);        
    };

    // Função de rolagem
    const rolarParaSecao = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault(); 

        const elemento = document.getElementById(id);
        if (elemento) {

            elemento.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Função para o usuário fechar o modal e o header manter.
    const aoFecharModal = () => {
        setModalAberto(false);
        checarLogin(); // Puxa os dados novos salvos pelo login.
    };

    return (
        <header>
            <div className="logo">
                 <img src="/img/Logo nova_criart.png" alt="logo criart" style={{ width: '80px' }} />
            </div>

            <nav>
                <ul>
                    {/* Alteração dos links para funcionar a seção onClick */}
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
                
            {/* Lógica para renderização condicional */}
           {nome ? (
                    
                    <div className='profile-logged-in' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        
                        {foto ? (
                            // Avatar da Google
                            <img src={foto} alt="Perfil" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
                        ) : (
                            // Avatar Local
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FFA500', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                {pegarInicial(nome)}
                            </div>
                        )}
                        
                        {/* Nome do usuário e Botão de Sair */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: 'bold', color: '#333', fontSize: '14px' }}>{nome.split(' ')[0]}</span>
                            <button onClick={fazerLogout} style={{ border: 'none', background: 'transparent', color: '#d9534f', fontSize: '12px', cursor: 'pointer', padding: 0 }}>Sair</button>
                        </div>
                    </div>

                ) : (
                    // Mostra o ícone original caso não esteja logado
                    <div className='profile-icon' onClick={() => setModalAberto(true)} style={{ cursor: 'pointer' }}>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: '#ffffff' }} />
                    </div>
                )}
            </div>

            {/* Modal de Login abrir/fechar */}
            {modalAberto && (  
                <ModalLogin fecharModal={aoFecharModal} />
            )}

        </header>       
    );
}