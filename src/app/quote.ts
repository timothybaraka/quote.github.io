export class Quote {
    showDescription:boolean;
constructor(public name:string,
    public author:string,
    public submitter:string,
    public publicationdate:Date,
    public like:number=0,
    public dislike:number=0
){
    this.showDescription=true;
}
}