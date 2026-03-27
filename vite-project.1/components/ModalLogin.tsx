import { useState } from 'react';

// Isso vai mostrar quais props o modal precisaria receber para funcionar
interface ModalLoginProps {
    fecharModal: () => void;
}

export function ModalLogin ({ fecharModal }: ModalLoginProps) {
    // Variavel de estado que controlará qual o formulário estará aparecendo
    const [telaAtiva, setTelaAtiva ] = useState<'login' | 'cadastro' | 'esqueci'>('login');

    //  Estados para o campo de CPF
    const [cpfValido, setCpfValido] = useState<boolean>(false);
    const [erroCpf, setErroCpf] = useState<string>('');
    const [cpfInput, setCpfInput] = useState<string>('');


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
    const validaCalculoCpf = (cpf: string) => {
        if (/^(\d)\1{10}$/.test(cpf)) return false;

        let soma = 0;
        let resto;

        // Valida primeiro digito verificador
        for (let i = 1; i <=10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(cpf.substring(10, 11))) return false;

        return true;
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

                        <form className = 'login-form'>
                            <div className = 'input-group'>
                                <input type = 'text' placeholder = 'Nome Completo' required />
                            </div>
                            <div className = 'input-group'>
                                <input type = 'email' placeholder = 'Seu e-mail' required />
                            </div>
                            <div className="input-group">
                                <input type="password" placeholder="Crie uma senha" required />
                            </div>

                           {/* O botão de cadastrar só fica clicável se o CPF for matematicamente válido */}
                            <button 
                                type='submit' 
                                className='btn-login' 
                                style={{ backgroundColor: cpfValido ? '#FFA500' : '#ccc', cursor: cpfValido ? 'pointer' : 'not-allowed' }}
                                disabled={!cpfValido}
                            >
                                Cadastrar
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