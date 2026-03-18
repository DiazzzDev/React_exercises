const Boton = ({titulo, color}) => {
    return (
        <>
            <button className={color}>
                {titulo}
            </button>
        </>
    )
}

export default Boton;