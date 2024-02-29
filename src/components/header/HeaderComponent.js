import "./HeaderComponent.css"

const HeaderComponent = () => {

    return (
        <div className="Header">
            <span className="overlay"></span>
            <a href="#"><img src=""/></a>
            <a href="#" className="Search"><i class="fa-solid fa-magnifying-glass"></i></a>
            <a href="#" className="Messages"><i class="fa-regular fa-message"></i><span>6</span></a>
            <button className="mainMenu" type="button">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span> 
            </button>
            <div className="Menu">
                <a href="#"><i class="fa-regular fa-user"></i> Seguindo</a>
                <a href="#"><i class="fa-regular fa-credit-card"></i> Meus cartões</a>
                <a href="#"><i class="fa-regular fa-circle-play"></i> Seja Criador</a>
                <hr color="#4b4b4b"/>
                <a href="#"><i class="fa-solid fa-gear"></i> Configurações</a>
                <a href="#"><i class="fa-solid fa-shield-halved"></i> Segurança e privacidade</a>
                <a href="#"><i class="fa-solid fa-circle-question"></i> Ajuda</a>
                <hr color="#4b4b4b"/>
                <a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Sair</a>
            </div>
        </div>
    )
}

export default HeaderComponent;