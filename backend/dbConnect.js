import mysql from 'mysql';



export const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Badrudeen93$',
    database: 'lecture_rate_plus_schema'
})
