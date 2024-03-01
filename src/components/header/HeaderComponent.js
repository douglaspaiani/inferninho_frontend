import "./HeaderComponent.css"

const HeaderComponent = () => {

    return (
        <div className="Header">
            <span className="overlay"></span>
            <a href="#"><img className="logo" src="/images/logo.png"/></a>
            <a href="#" className="Search"><i className="fa-solid fa-magnifying-glass"></i></a>
            <a href="#" className="Messages"><i className="fa-regular fa-message"></i><span>6</span></a>
            <button className="mainMenu" type="button">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span> 
            </button>
            <div className="Menu">
                <a href="#"><i className="fa-regular fa-user"></i> Seguindo</a>
                <a href="#"><i className="fa-regular fa-credit-card"></i> Meus cartões</a>
                <a href="#"><i className="fa-regular fa-circle-play"></i> Seja Criador</a>
                <hr color="#4b4b4b"/>
                <a href="#"><i className="fa-solid fa-gear"></i> Configurações</a>
                <a href="#"><i className="fa-solid fa-shield-halved"></i> Segurança e privacidade</a>
                <a href="#"><i className="fa-solid fa-circle-question"></i> Ajuda</a>
                <hr color="#4b4b4b"/>
                <a href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i> Sair</a>
            </div>
        </div>
    )
}

export default HeaderComponent;