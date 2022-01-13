import express from 'express';
import routes from './routes';
import loadModules from './setup/loadModules';
import customResponse from './setup/customResponse';
import connection from './setup/db';
import { dbSync } from './models';


const app = express();

export default function startServer({port}) {
    loadModules(app);
    dbSync();
    app.use(customResponse);

    const router = routes();

    app.use(router);

    return connection(app, {
        port
    });
}