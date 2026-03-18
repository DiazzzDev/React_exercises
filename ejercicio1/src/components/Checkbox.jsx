const Checkbox = ({idCheckbox}) => {
    return (
        <>
            <input type="checkbox" className="btn-check" id={idCheckbox} autoComplete="off"/>
            <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>
        </>
    )
}

export default Checkbox;