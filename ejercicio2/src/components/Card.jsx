import { Button } from "./Button.jsx";
import "../index.css"

const Card = ({ name, age, profession, city }) => {
    return (
        <div className="container justify-content-center mt-5">
            <div className="card shadow-sm p-3">
                <div className="card-body text-center">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{age} años | {city}</p>
                    <p className="card-text">Actualmente trabajo de: {profession}</p>
                    <p className="fw-semibold">Puedes conocer más sobre mí en:</p>
                    <div className="d-flex justify-content-end gap-2">
                        <Button title={"Github"} url={"https://github.com/DiazzzDev"} color={"dark"} />
                        <Button title={"Linkedin"} url={"https://www.linkedin.com/in/edwindiaz-dev"} color={"primary"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;