import { useState, useEffect } from "react";
import ProgressElement from "../components/ProgressElement";
import {EpicModel} from "../models/epic.model";

import './ProgressSection.css'
import {FaSyncAlt} from "react-icons/fa";

const ProgressSection = () => {
    const [epics, setEpics] = useState<EpicModel[]>([]);

    useEffect(() => {
        refresh();
    }, [])

    function refresh() {
        const fetchEpics = async () => {
            const res = await fetch("https://swimresults.de/api/project/index.php");
            const data = await res.json();

            setEpics(data);
        }

        fetchEpics().then(_ => {});
    }

    return <>
        {epics.map((epic) => (
            <ProgressElement epic={epic} />
        ))}
        <button className="refresh-btn" onClick={refresh}><FaSyncAlt/></button>
    </>
}

export default ProgressSection