import XLSX from 'xlsx';
import fs  from  'fs';

const finalObject = {};
const data = XLSX.read('./data.xlsx', { type: 'file' });
//console.log(data)

data.SheetNames.forEach(sheetName => {
  let rowObject = XLSX.utils.sheet_to_json(data.Sheets[sheetName]);
  finalObject[sheetName] = rowObject;
});

function modele(data){
  let items = []
  data["Hoja1"].forEach(element => {
    //console.log(element)
    let datas = [
      {
        year: element.Year,
        man: element.Hombres,
        woman: element.Mujeres,
        ignore: element.Ignorados
      },
      {
        year: element.Year_1,
        man: element.Hombres_1,
        woman: element.Mujeres_1,
        ignore: element.Ignorados_1
      },
      {
        year: element.Year_2,
        man: element.Hombres_2,
        woman: element.Mujeres_2,
        ignore: element.Ignorados_2
      },
      {
        year: element.Year_3,
        man: element.Hombres_3,
        woman: element.Mujeres_3,
        ignore: element.Ignorados_3
      },
      {
        year: element.Year_4,
        man: element.Hombres_4,
        woman: element.Mujeres_4,
        ignore: element.Ignorados_4
      }  
    ]
    items.push({typeCrime: element.typeCrime, data: datas});
  }); 
  writeJsonFile(items);
}


function writeJsonFile(data){
  let dataJSON =  JSON.stringify(data, null, '');
  fs.writeFileSync('db.json', dataJSON);
}


modele(finalObject)

//writeJsonFile(finalObject)