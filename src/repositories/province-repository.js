import config from './../configs/db-config.js' 
import pkg from 'pg' 
const { Client }  = pkg;

getDBClient = async () => {
    if(this.DBClient == null)
    {
        thisDBClient = new Client(config); 
        await this.DBClient.connect();
    }
    return this.DBClient;
}

getAllAsync = async (id) =>{
    console.log("get all jiji")
    let returnArray= null;
    try{
        const client = await this.getDBClient();
        let sql = `SELECT * from provinces`;
        let result = await client.query(sql); 
        returnArray= result.rows; // cant rows afectadas
        await client.end(); 
    }
    catch{
        console.log(error)
    }
    return returnArray;
}

//explort  