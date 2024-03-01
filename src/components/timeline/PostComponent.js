import "./PostComponent.css"
import $ from 'jquery';
import { useRef } from 'react';
import useDoubleClick from 'use-double-click';

const PostComponent = (props) => {
    const id = props.id;
    const url = "https://inferninho.com.br/"+props.user;
    const AltPost = "Postagem de "+props.name
    const LikePostImage = (post, id) => {
        const DoubleClickImage = useRef();
        useDoubleClick({
            onDoubleClick: e => {
                $('#'+id+' .like').trigger('click');
            },
            ref: DoubleClickImage,
            latency: 250
        });
        return <img ref={DoubleClickImage} src={post} alt={AltPost} title={AltPost}/>
    }
    
    
    const LikePost = (idPost) => {
        //
    }

    return (
        <div className="Post" id={id}>
            <div className="UserLine" style={{ backgroundImage: props.cover }}>
                <div className="img">
                    <a href={url}><img src={props.photo}/></a>
                </div>
                <div className="user">
                    <a href={url}><span>{props.name} 
                        <i className="verify fa-solid fa-circle-check"></i>
                        <i className="king fa-solid fa-crown"></i>
                    </span></a>
                    
                    <a href={url}><i>@{props.user}</i></a>
                </div>
            </div>
            <div className="posting">
                <div className="description">
                    {props.description}
                </div>
                <div className="imgPost">
                    {LikePostImage(props.post, id)}
                    <span className="likePhoto"><i className="fa-solid fa-heart"></i></span>
                </div>
                <div className="infos">
                    <button type="button" onClick={LikePost(id)} data-id={id} className="like button"><i className="fa-regular fa-heart"></i> <span>{props.likes}</span></button>
                    <a href="#" className="button"><i className="fa-solid fa-dollar-sign"></i> <span>Enviar um mimo</span></a>
                </div>
            </div>
        </div>
    )
}

export default PostComponent;