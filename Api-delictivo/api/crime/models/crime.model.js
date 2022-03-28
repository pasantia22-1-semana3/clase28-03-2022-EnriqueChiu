import fs from 'fs';


export class CrimeModel{
  constructor(){
    this._name = 'db',
    this._dataDir = 'db',
    this._dataPath = 'db/db.json'
  }


  readJsonFile(){
    let content = fs.readFileSync(this._dataPath, 'utf-8');
    if (content){
      return JSON.parse(content);
    }
    return [];
  }

  getAllType(){
    let items = this.readJsonFile();
    if (items){
      let itemsType = [];
      items.forEach(element => {
        //console.log(element.typeCrime);
        itemsType.push({typeCrime: element.typeCrime})
      });
      return itemsType;
    }
    return {message: `Error not found data`};
  }

  obtainYear(){
    let items = this.readJsonFile();
    if (items){
      let itemsYears = [];
      items.forEach(element => {
        element.data.forEach(elementData =>{
          if (!itemsYears.find((item)=>item == elementData.year)){
            itemsYears.push(elementData.year)
          }
        });
      });  
      return itemsYears
    }
  }

  ObtainDataForYear(){
    let items = this.readJsonFile();
    let itemsYear = this.obtainYear()
    let data = [];
    itemsYear.forEach(element =>{
        let dataYear = [];
      items.forEach(element2 =>{
        let item = element2.data.find((item)=> item.year == element)
        dataYear.push(item)
      })
      data.push(dataYear)
    });
    return data
  }

  getStatistics(){
    let items = this.readJsonFile();
    let result = []
    if (items){
      let itemsYears = this.ObtainDataForYear();
      itemsYears.forEach(element => {
        let man = 0
        let woman = 0
        let ignore = 0
        let year;
        element.forEach(item => {
          year = item.year
          man += item.man
          woman += item.woman
          ignore += item.ignore
        });
        let data = {man: man, woman: woman, ignore:ignore}
        result.push({year: year, data: data})
      });
      return result
    }
  }

  getTotalForType(){
     let items = this.readJsonFile();
    if (items){
      let result = []
      items.forEach(element => {
        let type = element.typeCrime;
        let man = 0;
        let woman = 0;
        let ignore = 0;
        element.data.forEach(element2 =>{
          man += element2.man
          woman += element2.woman
          ignore += element2.ignore
        });
        let data = {man: man, woman: woman, ignore:ignore}
        result.push({typeCrime: type, data: data })
      });
      return result
    }
  }

  getCrimeSex(){
    let items = this.getTotalForType();
    return items
  }

  getCrimeAll(){
    let items = this.getTotalForType();
    if (items){
      let result = []
      items.forEach(element => {
        let total = element.data.man + element.data.woman + element.data.ignore
        result.push({typeCrime: element.typeCrime, Total: total})
      });
      return result
    }

  }
}