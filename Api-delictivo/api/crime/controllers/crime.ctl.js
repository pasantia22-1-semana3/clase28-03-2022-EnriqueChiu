import { CrimeModel } from "../models/crime.model.js";
import { response } from "../../../response/response.js";


const crimeModel = new CrimeModel()

export class CrimeController{
  constructor(){}

  getAllTypeCrime(req, res){
    let items = crimeModel.getAllType()
    response.succes(req, res, items, 200)
  }

  getStatisticsYear(req, res){
    let items = crimeModel.getStatistics()
    response.succes(req, res, items, 200)
  }

  getCrimeSex(req, res){
    let items = crimeModel.getCrimeSex()
    response.succes(req, res, items, 200)
  }

  getCrimeAll(req, res){
    let items = crimeModel.getCrimeAll()
    response.succes(req, res, items, 200)
  }
}