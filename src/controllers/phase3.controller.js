import { getConnection } from "../database/connection";

export const getPhase3 = (req, res) => {
    getConnection().then(pool =>{
        let id = req.params.id
        let query = 'SELECT * FROM Phase_3 WHERE id_candidate = '+id
        pool.request().query(query, (error, result)=>{
            console.log(result)
            res.json(result.recordset)
        })
    })
}

export const createNewPhase3 = (req, res) => {
    const {id_candidate, average, salary, first_day} = req.body
    getConnection().then(pool =>{
        let query = `INSERT INTO Phase_3 (id_candidate, average, salary, first_day
            ) VALUES(${id_candidate}, ${average}, ${salary}, '${first_day}')`
        console.log(query)
        pool.request().query(query, (error, result)=>{
            if(!error){
                console.log(result)
                res.json('ok')
            }else{
                res.json(error);
                console.log(error);
            }
        })
    })
}

export const deletePhase3 = (req, res) => {
    let id = req.params.id
    console.log(id)
    getConnection().then(pool =>{
        let query = `DELETE FROM Phase_3 WHERE id = ${id}`
        pool.request().query(query, (error, result)=>{
            if(!error){
                console.log(result)
                res.json('ok')
            }else{
            }
        })
    })
}