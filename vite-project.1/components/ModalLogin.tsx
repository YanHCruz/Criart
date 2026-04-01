import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';

// Isso vai mostrar quais props o modal precisaria receber para funcionar
interface ModalLoginProps {
    fecharModal: () => void;
}
export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

export function ModalLogin ({ fecharModal }: ModalLoginProps) {
    // Variavel de estado que controlará qual o formulário estará aparecendo
    const [telaAtiva, setTelaAtiva ] = useState<'login' | 'cadastro' | 'esqueci'>('login');

    //  Estados para o campo de CPF
    const [cpfValido, setCpfValido] = useState<boolean>(false);
    const [erroCpf, setErroCpf] = useState<string>('');
    const [cpfInput, setCpfInput] = useState<string>('');
    const [senhaInput, setSenhaInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [nomeInput, setNomeInput] = useState('');
    const [estaCarregando, setEstaCarregando] = useState<boolean>(false);


    // Função para CPF toda vez que o usuário digitar uma tecla no campo
    const lidarComMudancaCpf = (evento: React.ChangeEvent<HTMLInputElement>) => {
        let valor = evento.target.value;

        // Faz a remoção de tudo o que não for número
        valor = valor.replace(/\D/g, "");

        // Faz a limitação para 11 digitos máximos
        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        // Aplica a máscara de CPF: 000.000.000-00
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        // Atualização do que aparecera na tela
        setCpfInput(valor);
        // setSenhaInput(valor);
        // setEmailInput(valor);
        // setNomeInput(valor);

        // Função matemática para a validação
        const cpfLimpo = valor.replace(/\D/g, ""); // Remove tudo o que não for número para a validação
        if (cpfLimpo.length === 11) {
            if (validaCalculoCpf(cpfLimpo)) {
                setErroCpf(''); // Limpa o erro
                setCpfValido(true); // Libera o botão
            } else {
                setErroCpf('CPF inválido!');
                setCpfValido(false); // Bloqueia o botão
            }
        } else {
            setErroCpf(''); // Não mostra erro enquanto ele ainda está digitando
            setCpfValido(false);
        }
    };

    // Função com algoritmo oficial para validação
    const validaCalculoCpf = (cpfOriginal: string) => {
        const cpf = cpfOriginal.replace(/[^\d]+/g, '');

        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

        let soma = 0;
        let resto;

        // Função de cáculo para o 1º digito
        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto =  0; {

            if (resto !== parseInt(cpf.substring(9, 10))) return false;

            soma = 0; // Zero a soma para a segunda parte do cálculo
            for (let i = 1; i <= 10; i++) {
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }
            resto = (soma * 10) % 11;
            if ((resto === 10) || (resto === 11)) resto = 0;
            
            // Se a matemática não bater com o 11º número digitado, é falso
            if (resto !== parseInt(cpf.substring(10, 11))) return false;
        }
        return true;
    };


    // Função para enviar para o Python

    const lidarComCadastro = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault(); // Evita que a página recarregue

        // Ativa o estado de carregamento Spinner
        setEstaCarregando(true);
        
        try {
            const resposta = await fetch('http://localhost:5000/api/validar-cpf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Transforma o CPF digitado em um formato JSON
                body: JSON.stringify({
                    nome: nomeInput,
                    cpf: cpfInput,
                    email: emailInput,
                    senha: senhaInput
                 }),
            });
            const dados = await resposta.json(); 

            if (resposta.ok) {
                // Se retornar 200 (Sucesso)
                setErroCpf('');
                alert('Sucesso! ' + dados.mensagem);
                
                // Limpa os campos após sucesso 
                setNomeInput('');
                setCpfInput('');
                setEmailInput('');
                setSenhaInput('');
            } else {
                // Se retornar 400 (erro)
                setErroCpf(dados.mensagem);
                setCpfValido(false);
            }
        } catch (error) {
            console.error('Erro ao validar CPF:', error);
            setErroCpf('Erro ao conectar com o servidor. Tente novamente mais tarde.');
        } finally {
            setEstaCarregando(false); // Desativa o estado de carregamento
        }
    };

    return (
        <div className = 'modal-overlay'>
            <div className = 'modal-content'>
                <span className = 'close-btn' onClick = {fecharModal}>x</span>

                {/* Tela de login */}
                {telaAtiva === 'login' && (
                    <div className = 'form-section'>
                        <h2 className = 'modal-title'>Bem vindo!</h2>
                        <p className = 'modal-title'>Faça login para continuar</p>

                        <form className='login-form'>
                            {/* ADICIONADO: Campo de CPF no Login em vez de E-mail */}
                            <div className='input-group'>
                                <input 
                                    type='text' 
                                    placeholder='Seu CPF' 
                                    value={cpfInput}
                                    onChange={lidarComMudancaCpf}
                                    required 
                                />
                                {/* Mostra a mensagem de erro amigável se for inválido */}
                                {erroCpf && <span className="erro-cpf">{erroCpf}</span>}
                            </div>

                        {/* <form className = 'login-form'>
                             <div className = 'input-group'>
                                <input type = 'email' placeholder = 'Seu e-mail' required />
                            </div> */}

                            <div className = 'input-group'>
                                <input type = 'password' placeholder = 'Sua senha' required />
                            </div>
                                
                                <a href = '#' className = 'forgot-pass' onClick={(e) => { e.preventDefault(); setTelaAtiva('esqueci'); }}>
                                    Esqueceu a senha?
                                    </a>

                                    <button type = 'submit' className = 'btn-login'>Entrar</button>
                        </form>
                        <p className = 'switch-form'>
                            Não tem conta? <a href = '#' onClick={(e) => {e.preventDefault(); setTelaAtiva('cadastro'); }}>Cadastre-se</a>
                            </p>
                    </div>
                )}

                {/* Tela de cadastro */}
                {telaAtiva === 'cadastro' && (
                    <div className = 'form-section'>
                        <h2 className = 'modal-title'>Criar Conta</h2>
                        <p className = 'modal-subtitle'>Junte-se à diversão</p>

                        {/* ADICIONADO: Campo de CPF no Cadastro */}
                            <div className='input-group'>
                                <input 
                                    type='text' 
                                    placeholder='Seu CPF' 
                                    value={cpfInput}
                                    onChange={lidarComMudancaCpf}
                                    required 
                                />
                                {erroCpf && <span className="erro-cpf">{erroCpf}</span>}
                            </div>

                        <form className = 'login-form' onSubmit={lidarComCadastro}>

                            <div className = 'input-group'>
                                <input type = 'text' placeholder = 'Nome Completo' value={nomeInput} onChange={(e) => setNomeInput(e.target.value)} required />
                            </div>

                            {/* <div className = 'input-group'>
                                <input type = 'text' placeholder = 'Cpf' value={cpfInput} onChange={lidarComMudancaCpf} required />
                                {erroCpf && <span className='erro-cpf'>{erroCpf}</span>}
                            </div>  */}

                            <div className = 'input-group'>
                                <input type = 'email' placeholder = 'Seu e-mail' value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required />
                            </div>

                            <div className="input-group">
                                <input type="password" placeholder="Crie uma senha" value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} required />
                            </div>

                           {/* O botão de cadastrar só fica clicável se o CPF for matematicamente válido */}
                            <button 
                                type='submit' 
                                className='btn-login' 
                                style={{ backgroundColor: cpfValido || estaCarregando ? '#FFA500' : '#ccc', 
                                cursor: cpfValido && !estaCarregando ? 'pointer' : 'not-allowed',
                                display: 'flex', // Flexbox para centralizar a bolinha
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '40px'}}
                               disabled={!cpfValido || estaCarregando}
                            >
                             {estaCarregando ? (
                                    <CircularProgress size={24} sx={{ color: 'white' }} />
                                ) : (
                                    'Cadastrar'
                                )}
                            </button>
                        </form>

                        <p className = 'switch-form'>
                            Já tem conta? <a href = '#' onClick={(e) => {e.preventDefault(); setTelaAtiva('login'); }}>Fazer Login</a>
                        </p>
                    </div>
                )}

                {/* Tela de esqueci a senha */}
                {telaAtiva === 'esqueci' &&(
                    <div className = 'form-section'>
                        <h2 className = 'modal-title'>Recuperar Senha</h2>
                        <p className = 'modal-subtitle'>Digite seu e-mail para receber o link de recuperação!</p>

                        <form className = 'login-fomr'>
                            <div className = 'input-group'>
                                <input type = 'email' placeholder = 'Seu e-mail cadastrado' required />
                            </div>
                            <button type = 'submit' className = 'btn-login' style={{ backgroundColor: '#A9A9A9' }}>Enviar link</button>
                        </form>

                        <p className = 'switch-form'>
                            Lembrou a senha? <a href = '#' onClick={(e) => {e.preventDefault(); setTelaAtiva('login'); }}>Voltar para login</a>
                        </p>
                    </div>
                )}
            </div>
        </div> 
    )
}