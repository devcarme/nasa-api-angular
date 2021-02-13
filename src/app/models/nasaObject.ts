export class NasaAttributes {
  href:string;
  title:string;

  constructor(){
    this.href = "";
    this.title = "";
  }

}

export class NasaObject {
  collection: NasaAttributes[];

  constructor(){
    this.collection = [];
  }

}
