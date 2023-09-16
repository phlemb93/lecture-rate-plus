import mysql from 'mysql';



export const db = mysql.createConnection({
    host: 'lecturerateplus-db.cyzq7n9aatzi.eu-north-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'LectureRatePlus',
    database: 'lecturerateplus-schema'
})

