import { useState } from 'react';

// Isso vai mostrar quais props o modal precisaria receber para funcionar
interface ModalLoginProps {
    fecharModal: () => void;
}

export function ModalLogin ({ fecharModal }: ModalLoginProps) {
    // Variavel de estado que controlará qual o formulário estará aparecendo
    const [telaAtiva, setTelaAtiva ] = useState<'login' | 'cadastro' | 'esqueci'>('login');

    return (
        <div className = 'modal-overlay'>
            <div className = 'modal-content'>
                <span className = 'close-btn' onClick = {fecharModal}>X</span>

                {/* Tela de login */}
                {telaAtiva === 'login' && (
                    <div className = 'form-section'>
                        <h2 className = 'modal-title'>Bem vindo!</h2>
                        <p className = 'modal-title'>Faça login para continuar</p>

                        <form className = 'login-form'>
                             <div className = 'input-group'>
                                <input type = 'email' placeholder = 'Seu e-mail' required />
                            </div>

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

                            {/* O style do react utiliza duas chaves e o camelCase */}
                            <button type = 'submit' className = 'btn-login' style={{ backgroundColor: '#FFA500' }}>Cadastrar</button>
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