export class EpicModel {
    title: string = "";
    progress: number = 0;
    type?: "FRONTEND" | "BACKEND" | "INFRASTRUKTUR";
    state?: "OPEN" | "WIP" | "DONE";

    constructor(title: string = "", progress: number = 0) {
        this.title = title;
        this.progress = progress;
    }


}