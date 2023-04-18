import { useState, useEffect } from "react";
import ProgressElement from "../components/ProgressElement";
import {EpicModel} from "../models/epic.model";

import './ProgressSection.css'
import {FaSyncAlt} from "react-icons/fa";
import {ApiResponseModel} from "../models/api-response.model";

const ProgressSection = () => {
    const [epics, setEpics] = useState<EpicModel[]>([]);
    const [progress, setProgress] = useState<number>();

    useEffect(() => {
        refresh();
    }, [])

    function refresh() {
        const fetchEpics = async () => {
            const res = await fetch("https://swimresults.de/api/project/index.php");
            const data: ApiResponseModel = await res.json();

            setEpics(data.epics);
            setProgress(data.progress);
        }

        fetchEpics().then(_ => {});
    }

    return <>
        <ProgressElement epic={new EpicModel("Gesamtfortschritt", progress)} />
        <br />
        <br />
        {epics.map((epic) => (
            <ProgressElement epic={epic} />
        ))}
        <button className="refresh-btn" onClick={refresh}><FaSyncAlt/></button>
    </>
}

export default ProgressSection