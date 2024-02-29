import "./UsersComponent.css"

const UsersComponent = (props) => {

    return (
        <div className="User">
            <h1>{props.name}</h1>
        </div>
    )
}

export default UsersComponent;