const Card = ({title, content}) => {
    return (
        <div className="card shadow-sm" style={{width: "30em"}}>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
            <p className="card-text">{content}</p>
            </div>
        </div>
    )
}

export default Card;