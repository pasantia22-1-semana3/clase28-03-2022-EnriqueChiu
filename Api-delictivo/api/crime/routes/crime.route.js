import express from 'express';
import { CrimeController } from '../controllers/crime.ctl.js';


const routeCrime = express.Router();

const crimeCtl = new CrimeController();


/**
 * @swagger
 * /api/v1/crime/getAllTypeCrime:
 *  get:
 *    summary: return all type crime
 *    tags: [crime]
 *    responses:
 *      200:
 *        description: all type crime
 */
routeCrime.get('/getAllTypeCrime', crimeCtl.getAllTypeCrime);

/**
 * @swagger
 * /api/v1/crime/getStatisticsYear:
 *  get:
 *    summary: return statistics for year
 *    tags: [crime]
 *    responses:
 *      200:
 *        description: statistics for year
 */
routeCrime.get('/getStatisticsYear', crimeCtl.getStatisticsYear);

/**
 * @swagger
 * /api/v1/crime/getCrimeSex:
 *  get:
 *    summary: return crime for Sex
 *    tags: [crime]
 *    responses:
 *      200:
 *        description: crime for Sex
 */
routeCrime.get('/getCrimeSex', crimeCtl.getCrimeSex)

/**
 * @swagger
 * /api/v1/crime/getCrimeAll:
 *  get:
 *    summary: return all crime total
 *    tags: [crime]
 *    responses:
 *      200:
 *        description: all crime total
 */
routeCrime.get('/getCrimeAll', crimeCtl.getCrimeAll)

export default routeCrime