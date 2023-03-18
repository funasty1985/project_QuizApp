
export class Quiz {

    constructor(
        public _id?: number,
        public title?: string,
        public description?: string,
        public author?: number,
    ){}

    public toString(){
        return `Question
        ---------------------------
        title         : ${this.title}
        description   : ${this.description}
        author        : ${this.author}
        ---------------------------
        `;
    }
}