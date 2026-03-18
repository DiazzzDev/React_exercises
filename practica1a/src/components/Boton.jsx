import './App.css'

const Boton = ({titulo, accion}) => {
    return (
        <button className='boton'
        onClick={accion}>
            {titulo}
        </button>
    )
}

export default Boton