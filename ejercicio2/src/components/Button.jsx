export const Button = ({title, color, url}) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <button 
                type="button" className={"btn btn-" + color}>
                    {title}
            </button>
        </a>
    )
}