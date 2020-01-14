export class Quote {
    showDescription:boolean;
constructor(public name:string,
    public author:string,
    public submitter:string,
    public publicationdate:Date
){
    this.showDescription=true;
}
}