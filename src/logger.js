const axios = require('axios');
const winston = require('winston');
const logger = winston.createLogger({
    level:'info',
    format: winston.format.json(),
    defaultMeta: {service: 'user-service'},
    transports: [
        new winston.transports.File({filename: 'error.log', level:'error'}),
        new winston.transports.File({filename:'combined.log'})
    ]
});

class Bot{
 constructor(token){
    if(!token){
        logger.error('No discord token provided');
        throw new winston.error('please provide a discord token');
    }

    this.baseUrl ='https://discord.com/api/v10';
    this.headers ={headers: {Authorization:`${token}`}};
 }

 async getUserInfo(){
    try {
        const url = `${this.baseUrl}/user/@me`;
        const res = await axios.get(url, this.headers);
        return res.data 
    } catch (err) {
        logger.err('Error Fetching user data info :'+err.message);
        throw err;
    }
 }


}