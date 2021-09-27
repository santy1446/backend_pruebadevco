import { getConnection } from "../database/connection";

export const getCandidates = (req, res) => {
    getConnection().then(pool =>{
        //let query = 'SELECT * FROM Candidates'
        let query = `select a.id, a.identification_candidate, a.name_candidate, a.role_id, b.role_name,
        a.phase, a.wage_aspiration, a.date_postulation, a.email_candidate, a.email_evaluator
        from Candidates a inner join Roles b on a.role_id = b.id`
        pool.request().query(query, (error, result)=>{
            console.log(result)
            res.json(result.recordset)
        })
    })
}

export const createNewCandidate = (req, res) => {
    const {identification_candidate, name_candidate, role_id, date_postulation, wage_aspiration, phase, email_candidate, email_evaluator} = req.body
    console.log(identification_candidate)
    getConnection().then(pool =>{
        let query = `INSERT INTO Candidates (identification_candidate, name_candidate, role_id, date_postulation, wage_aspiration, phase, email_candidate, email_evaluator
            ) VALUES('${identification_candidate}', '${name_candidate}', ${role_id}, '${date_postulation}', ${wage_aspiration}, ${phase}, '${email_candidate}',
            '${email_evaluator}')`
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

export const deleteCandidate = (req, res) => {
    let id = req.params.id
    console.log(id)
    getConnection().then(pool =>{
        let query = `DELETE FROM Candidates WHERE id = ${id}`
        pool.request().query(query, (error, result)=>{
            if(!error){
                console.log(result)
                res.json('ok')
            }else{
            }
        })
    })
}

export const updateCandidatePhase = (req, res) => {
    const {phase} = req.body
    let id = req.params.id
    console.log(id)
    getConnection().then(pool =>{
        let query = `UPDATE Candidates SET phase = ${phase} WHERE id = ${id}`
        pool.request().query(query, (error, result)=>{
            if(!error){
                console.log(result)
                res.json('ok')
            }else{
            }
        })
    })
}

export const updateCandidate = (req, res) => {
    const {identification_candidate, name_candidate, role_id, date_postulation, wage_aspiration, phase, email_candidate, email_evaluator} = req.body
    let id = req.params.id
    console.log(id)
    getConnection().then(pool =>{
        let query = `UPDATE Candidates SET 
        identification_candidate = '${identification_candidate}',
        name_candidate = '${name_candidate}',
        role_id = ${role_id},
        date_postulation = '${date_postulation}',
        wage_aspiration = ${wage_aspiration},
        phase = ${phase},
        email_candidate = '${email_candidate}',
        email_evaluator = '${email_evaluator}'
        WHERE id = ${id}`
        pool.request().query(query, (error, result)=>{
            if(!error){
                console.log(result)
                res.json('ok')
            }else{
            }
        })
    })
}