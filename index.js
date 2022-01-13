import startServer from './src/app';
require('dotenv').config();

const isProduction = 
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'staging';

// console.log(process.env.PORT)
    startServer({
        port: isProduction ? process.env.PORT : undefined
    });