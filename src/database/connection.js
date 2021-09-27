
const sql = require('mssql/msnodesqlv8')
//msnodesqlv8 module is requiered for Windows Authentication without using Username and Password

export function getConnection() {
    let promise = new Promise((resolve, reject) => {
        const pool = new sql.ConnectionPool({
            database: 'Devco_test',
            server: 'localhost',
            driver: 'msnodesqlv8',
            options: {
                trustedConnection: true
            }
        })

        pool.connect().then(() => {
            resolve(pool)
        })
    })
    return promise;
}



