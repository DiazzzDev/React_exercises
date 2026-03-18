import "../index.css"

const Card = ({ name, price }) => {
    return (
        <div className="container justify-content-center mt-5">
            <div className="card shadow-sm p-3">
                <div className="card-body text-center">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">Precio: {price}</p>
                    <div className="d-flex justify-content-end gap-2">
                        <button className="btn btn-primary">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;