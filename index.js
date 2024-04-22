import config from './src/configs/db-config.js' 
import pkg from 'pg' 
const { Client }  = pkg;

import {getAllAsync} from './src/repositories/province-repository.js' 

// https://node-postgres.com/apis/client 
const client = new Client(config); 
await client.connect();

/*
let sql = `SELECT * from provinces`; // `... limit 5`
let result = await client.query(sql); 
await client.end(); 
// 'rows' tiene un array con el resultado. rows[0] el 1ºer registro. 
console.log(result.rows);
*/
const resultado = await rep.getAllAsync();
/*const resultado1 = await rep.getAllByIdAsync(2);
let provi = new Province()
{
    provi.name= "chano";
    provi.full_name= "provincia chano del pacifico";
    provi.latitude="-33.456743";
    provi.longitude= "-46.98745";
    provi.display_order= null; 
}


const resultado2 = await rep.createAsync(provi);
const resultado3 = await rep.getAllAsync();
*/
