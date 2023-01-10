const { response } = require("express")
var db = require('../models');
const {Sequelize, Op, Querytypes} = require('sequelize');
const Users = db.users;
// const addUser = async (req, res)=>{
//         let data = await Users.create({name: "text", email: "test@gmail.com"})
//         let response = {
//             data: 'OK'
//         }
//         res.status(200).json(response);  
// }

const crud = async(req, res)=>{
    //insert
    const data = await Users.create({name: 'test', email: 'test1@gmail.com', gender: 'male'});

    let response = {
        data:'ok'
    }
    res.status(200).json(response);
}
const rawQuery = async (req, resp)=>{
    const users = await db.sequelize.query("SELECT * FROM Users",{
        type: Querytypes.SELECT
    })
    const response = {
        data:"Raw Query", record: users
    }
    resp.status(200).json(response);
}

module.exports = {
    crud,
    rawQuery
}