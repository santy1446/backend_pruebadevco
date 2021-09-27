import { getConnection } from "../database/connection";

export const getRoles = (req, res) => {
    getConnection().then(pool =>{
        let query = 'SELECT * FROM Roles'
        pool.request().query(query, (error, result)=>{
            console.log(result)
            res.json(result.recordset)
        })
    })
}

export const createNewRole = (req, res) => {
    const {role_name} = req.body
    console.log(role_name)
    getConnection().then(pool =>{
        let query = `INSERT INTO Roles (role_name) VALUES('${role_name}')`
        pool.request().query(query, (error, result)=>{
            if(!error){
                console.log(result)
                res.json('ok')
            }else{
            }
        })
    })
}

export const deleteRole = (req, res) => {
    let id = req.params.id
    console.log(id)
    getConnection().then(pool =>{
        let query = `DELETE FROM Roles WHERE id = ${id}`
        pool.request().query(query, (error, result)=>{
            if(!error){
                console.log(result)
                res.json('ok')
            }else{
            }
        })
    })
}