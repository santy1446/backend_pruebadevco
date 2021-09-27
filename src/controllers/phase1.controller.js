import { getConnection } from "../database/connection";

export const getPhase1 = (req, res) => {
    let id = req.params.id
    getConnection().then(pool =>{
        let query = 'SELECT * FROM Phase_1 WHERE id_candidate = '+id
        pool.request().query(query, (error, result)=>{
            console.log(result)
            res.json(result.recordset)
        })
    })
}

export const createNewPhase1 = (req, res) => {
    const {id_candidate, theoretical_qualification, technical_qualification, comments, evaluator_name} = req.body
    getConnection().then(pool =>{
        let query = `INSERT INTO Phase_1 (id_candidate, theoretical_qualification, technical_qualification, comments, evaluator_name
            ) VALUES(${id_candidate}, ${theoretical_qualification}, ${technical_qualification}, '${comments}', '${evaluator_name}')`
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

export const deletePhase1 = (req, res) => {
    let id = req.params.id
    console.log(id)
    getConnection().then(pool =>{
        let query = `DELETE FROM Phase_1 WHERE id = ${id}`
        pool.request().query(query, (error, result)=>{
            if(!error){
                console.log(result)
                res.json('ok')
            }else{
            }
        })
    })
}