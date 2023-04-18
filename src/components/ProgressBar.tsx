const ProgressBar = ({value = 0}) => {
    return (
        <div className="progress-bar">
            <div
                className="progress-bar-progress"
                style={{ width: value + "%"}}
            ></div>
        </div>
    )
}

export default ProgressBar