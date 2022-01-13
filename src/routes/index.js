import express, { Router } from 'express';

import userRoutes from './user';


export default function getRoutes(){
    const router = Router();
    
    router.get('/test', ()=>{
        console.log('test routes')
    });

    router.use('/user', userRoutes())

    return router;
}