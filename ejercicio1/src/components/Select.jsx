const Select = ({title, value1, value2, value3}) => {
    return (
        <>
            <label>Elige una opción</label>
            <select name={title} className="form-select">
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
            </select>
        </>
    )
}

export default Select;