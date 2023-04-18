import {EpicModel} from "../models/epic.model";
import ProgressBar from "./ProgressBar";
import {FaCheckCircle, FaGlobe, FaQuestionCircle, FaServer, FaWrench} from "react-icons/fa";

const ProgressElement = ( { epic = new EpicModel() }) => {
    return (
        <div className="progress-element">
            <h3>{epic.title}

                <span className="progress-type-icon tooltipper">
                    {epic.state === "OPEN" ? <FaQuestionCircle /> : (
                        epic.state === "WIP" ? <FaWrench /> : <FaCheckCircle />
                    )}
                    <span className="tooltip">
                        {
                            epic.state === "OPEN" ? "Offen" :
                            epic.state === "WIP" ? "In Arbeit" : "Abgeschlossen"
                        }
                    </span>
                </span>

                <span className="progress-type-icon tooltipper">
                    {epic.type === "BACKEND" ? <FaServer /> : <FaGlobe />}
                    <span className="tooltip">
                        {epic.type === "BACKEND" ? "Backend" : "Frontend"}
                    </span>
                </span>

            </h3>
            <ProgressBar value={epic.progress} />
        </div>
    )
}

export default ProgressElement