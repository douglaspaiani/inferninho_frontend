import "./UserComponent.css"

const UserComponent = (props) => {

    return (
        <div className="User">
            <div className="UserLine" style={{ backgroundImage: props.cover }}>
                <a href={props.url}><img src={props.photo}/></a>
                <a href={props.url}><span>{props.name}</span></a>
            </div>
        </div>
    )
}

export default UserComponent;