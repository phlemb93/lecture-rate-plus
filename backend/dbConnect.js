import mysql from 'mysql';



export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Badrudeen93$',
    database: 'lecture_rate_plus_schema'
})