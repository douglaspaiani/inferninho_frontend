import "./Login.css"
const LoginPage = () => {

    return (
        <div>
            <span className="backgroundLogin" style={{ backgroundImage: `url(/images/background-login.jpg)` }}>
                <p>Monetize sua liberdade,<br/>seja dono do seu inferninho!</p>
            </span>
            <div className="boxLogin">
                <form>
                    <h1>Acesse sua conta</h1>
                    <div className="input">
                        <label htmlFor="email">Endereço de e-mail</label>
                        <input type="email" name="email" placeholder="Insira seu e-mail" required/>
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" placeholder="Insira sua senha" required/>
                        <i className="fa-solid fa-lock"></i>
                        <a href="#" className="passwordRecovery">Esqueceu sua senha?</a>
                    </div>
                    <div className="button btn-loading">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        <button type="submit"><span>Entrar</span></button>
                    </div>
                    <div className="buttonsSocial">
                        <button className="google" type="button"><span  style={{ backgroundImage: `url(/images/google-icon.png)` }}></span> Entrar com o Google</button>
                        <button className="google" type="button"><span  style={{ backgroundImage: `url(/images/twitter-icon.png)` }}></span> Entrar com o Twitter</button>
                    </div>
                    <a href="#" className="signin">Inscreva-se no Inferninho</a>
                </form>
            </div>
        </div>
    )

}

export default LoginPage;