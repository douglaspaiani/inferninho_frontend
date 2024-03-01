import "./NavbarCreatorComponent.css"

const NavbarCreatorComponent = () => {

    return (
        <div className="NavbarCreator">
            <a href="#" className="box">
                <div className="subBox">
                    <i className="fa-solid fa-user"></i>
                    <span>Meu perfil</span>
                </div>
                <div className="subBox">
                    <i className="fa-solid fa-users"></i>
                    <span>Assinantes</span>
                </div>
            </a>
            <a href="#" className="photo">
                <i className="iconPhoto fa-solid fa-camera"></i>
            </a>
            <a href="#" className="box">
                <div className="subBox">
                    <i className="fa-solid fa-circle-dollar-to-slot"></i>
                    <span>Receita</span>
                </div>
                <div className="subBox">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                    <span>Saque</span>
                </div>
            </a>
        </div>
    )
}

export default NavbarCreatorComponent;