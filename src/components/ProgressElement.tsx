import {EpicModel} from "../models/epic.model";
import ProgressBar from "./ProgressBar";
import {FaCheckCircle, FaGlobe, FaNetworkWired, FaQuestionCircle, FaServer, FaWrench} from "react-icons/fa";

const ProgressElement = ( { epic = new EpicModel() }) => {
    return (
        <div className="progress-element">
            <h3>{epic.title}

                {
                    epic.state !== undefined ?
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
                    </span> : <></>
                }

                {
                    epic.type !== undefined ?
                    <span className="progress-type-icon tooltipper">
                        {epic.type === "BACKEND" ? <FaServer /> : (
                            epic.type === "FRONTEND" ? <FaGlobe /> : <FaNetworkWired />
                        )}
                        <span className="tooltip">
                            {
                                epic.type === "BACKEND" ? "Backend" :
                                epic.type === "FRONTEND" ? "Frontend" : "Infrastruktur"
                            }
                        </span>
                    </span> : <></>
                }

            </h3>
            <ProgressBar value={epic.progress} />
        </div>
    )
}

export default ProgressElement