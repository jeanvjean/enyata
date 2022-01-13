import { sequelize } from '../setup/db';

import User from './User';

export const dbSync = ()=>{
    sequelize.sync().then(result=>{
        console.log('done');
    }).catch(err=>{
        console.log(err)
    })
}

export {
    User
}