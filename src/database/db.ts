import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'silvablo',
    database: 'uptimerobot',
    waitForConnections: true,
    connectionLimit: 10,
});

(async () => {
    try {
        console.log('Database connected successfully');
        const connection = await db.getConnection();
        connection.release();
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
})();