import { Button } from "./Button.jsx";
import { Input } from "./Input.jsx"
import "../index.css"

const Card = () => {
    return (
        <div className="container justify-content-center mt-5">
            <div className="card shadow-sm p-3">
                <div className="card-body text-center">
                    <h3 className="card-title">Ejercicio 3</h3>
                    <p className="fw-semibold">Ingresa lo que solicitan los campos:</p>
                    <div className="d-flex justify-content-end gap-2">
                        <Input/>
                        <Input/>
                        <Button title={"Sumar"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;