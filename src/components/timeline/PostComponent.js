import "./PostComponent.css"

const PostComponent = (props) => {

    const url = "https://inferninho.com.br/"+props.user;
    const AltPost = "Postagem de "+props.name

    return (
        <div className="Post">
            <div className="UserLine" style={{ backgroundImage: props.cover }}>
                <div className="img">
                    <a href={url}><img src={props.photo}/></a>
                </div>
                <div className="user">
                    <a href={url}><span>{props.name}</span></a>
                    <a href={url}><i>@{props.user}</i></a>
                </div>
            </div>
            <div className="posting">
                <div className="description">
                    {props.description}
                </div>
                <img src={props.post} alt={AltPost} title={AltPost}/>
                <div className="infos">
                    <button type="button" className="like button"><i class="fa-regular fa-heart"></i> <span>{props.likes}</span></button>
                    <a href="#" className="button"><i class="fa-solid fa-dollar-sign"></i> <span>Enviar um mimo</span></a>
                </div>
            </div>
        </div>
    )
}

export default PostComponent;