import "./Home.css";
import HeaderComponent from "../../components/header/HeaderComponent";
import UsersComponent from "../../components/users/UsersComponent";

const HomePage = () => {

    return (
        <div>
            <HeaderComponent/>
            <UsersComponent name="Thalya Dorneles"/>
        </div>
    )
}

export default HomePage;