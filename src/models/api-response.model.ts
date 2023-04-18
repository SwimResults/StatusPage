import {EpicModel} from "./epic.model";

export interface ApiResponseModel {
    issues: number,
    progress: number,
    epics: EpicModel[]
}