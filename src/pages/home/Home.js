import "./Home.css";
import HeaderComponent from "../../components/header/HeaderComponent";
import UserComponent from "../../components/users/UserComponent";
import PostComponent from "../../components/timeline/PostComponent";
import NavbarCreatorComponent from "../../components/creator/NavbarCreatorComponent";

const HomePage = () => {

    return (
        <div>
            <HeaderComponent/>
            <div className="container">
                <PostComponent
                    name="Thalya Dorneles"
                    photo="/images/user/photo-thalya.jpg"
                    cover="cover-thalya.jpg"
                    user="thalyadorneles"
                    description="Teste de descrição"
                    post="/images/user/post-thalya.jpg"
                    likes="15"
                    id="16"
                />
                <PostComponent
                    name="Thalya Dorneles"
                    photo="/images/user/photo-thalya.jpg"
                    cover="cover-thalya.jpg"
                    user="thalyadorneles"
                    description="Teste de descrição"
                    post="/images/user/post-thalya.jpg"
                    likes="15"
                    id="15"
                />
                <NavbarCreatorComponent/>
            </div>
        </div>
    )
}

export default HomePage;