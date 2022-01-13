import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import express from 'express';


const loadModules = async app=>{
    app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cors());
	app.use(morgan('combined'));
}

export default loadModules;