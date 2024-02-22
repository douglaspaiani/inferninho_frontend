import "./HeaderComponent.css"

const HeaderComponent = () => {

    return (
        <div className="Header">
            <a href="#"><img src=""/></a>
            <a href="#" className="Search"><i class="fa-solid fa-magnifying-glass"></i></a>
            <a href="#" className="Messages"><i class="fa-regular fa-message"></i><span>6</span></a>
            <button className="mainMenu" type="button">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span> 
            </button>
        </div>
    )
}

export default HeaderComponent;