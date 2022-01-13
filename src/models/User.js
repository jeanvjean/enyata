import { sequelize } from '../setup/db';
import Sequelize from 'sequelize';


    const User = sequelize.define('users', {
        first_name: {
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        last_name:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        email: {
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,
            validate:{
                notEmpty:true
            }
        },
        password: {
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    })

    export default User;