import { getConnection } from "../database/connection";

export const getPhase2 = (req, res) => {
    let id = req.params.id
    getConnection().then(pool =>{
        let query = 'SELECT * FROM Phase_2 WHERE id_candidate = '+id
        pool.request().query(query, (error, result)=>{
            console.log(result)
            res.json(result.recordset)
        })
    })
}

export const createNewPhase2 = (req, res) => {
    const {id_candidate, psychological_qualification, medical_qualification, comments} = req.body
    getConnection().then(pool =>{
        let query = `INSERT INTO Phase_2 (id_candidate, psychological_qualification, medical_qualification, comments
            ) VALUES(${id_candidate}, ${psychological_qualification}, ${medical_qualification}, '${comments}')`
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

export const deletePhase2 = (req, res) => {
    let id = req.params.id
    console.log(id)
    getConnection().then(pool =>{
        let query = `DELETE FROM Phase_2 WHERE id = ${id}`
        pool.request().query(query, (error, result)=>{
            if(!error){
                console.log(result)
                res.json('ok')
            }else{
            }
        })
    })
}