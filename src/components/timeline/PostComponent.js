import "./PostComponent.css"
import $ from 'jquery';
import { useRef } from 'react';
import useDoubleClick from 'use-double-click';

const PostComponent = (props) => {

    const url = "https://inferninho.com.br/"+props.user;
    const AltPost = "Postagem de "+props.name
    const DoubleClickImage = useRef();
    useDoubleClick({
        onDoubleClick: e => {
            $('.like').trigger('click');
            $('.Post .posting .likePhoto').fadeIn(400).css('display', 'grid');
            $('.Post .posting .likePhoto').fadeOut(2000).hide(2000);
        },
        ref: DoubleClickImage,
        latency: 250
    });
    
    const LikePost = () => {
        //alert("The image was double-clicked!");
    }

    return (
        <div className="Post">
            <div className="UserLine" style={{ backgroundImage: props.cover }}>
                <div className="img">
                    <a href={url}><img src={props.photo}/></a>
                </div>
                <div className="user">
                    <a href={url}><span>{props.name} 
                        <i class="verify fa-solid fa-circle-check"></i>
                        <i class="king fa-solid fa-crown"></i>
                    </span></a>
                    
                    <a href={url}><i>@{props.user}</i></a>
                </div>
            </div>
            <div className="posting">
                <div className="description">
                    {props.description}
                </div>
                <div className="imgPost">
                    <img ref={DoubleClickImage} src={props.post} alt={AltPost} title={AltPost}/>
                    <span className="likePhoto"><i class="fa-solid fa-heart"></i></span>
                </div>
                <div className="infos">
                    <button type="button" onClick={LikePost} className="like button"><i class="fa-regular fa-heart"></i> <span>{props.likes}</span></button>
                    <a href="#" className="button"><i class="fa-solid fa-dollar-sign"></i> <span>Enviar um mimo</span></a>
                </div>
            </div>
        </div>
    )
}

export default PostComponent;