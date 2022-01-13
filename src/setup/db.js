const Sequelize = require('sequelize');
import logger from '../utils/logger';
const detectPort = require('detect-port');


const connection = (app, port) => 
    new Promise(async resolve=>{
        port = port.port || (await detectPort());

        const server = app.listen(port,()=>{
            logger.log(`Listening On port: ${port}`);
        });

        resolve(server);
    });

export const  sequelize = new Sequelize('enyata', 'postgres', `jeanvaljean`, {
    host:'localhost',
    dialect:"postgres",
    port: 9900
});

export default connection;