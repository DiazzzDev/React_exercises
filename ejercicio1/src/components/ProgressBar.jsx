const ProgressBar = () => {
    return (
        <div className="progress">
            <div 
            className="progress-bar" 
            role="progressbar" 
            aria-label="Basic example" 
            style={{width: "10%"}} 
            aria-valuenow="25" 
            aria-valuemin="0" 
            aria-valuemax="100"></div>
        </div>
    )
}

export default ProgressBar;