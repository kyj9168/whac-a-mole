import mysql from 'mysql2/promise';
import * as config from '../config/config.json';

export const pool = mysql.createPool({
	host: config.MYSQL_HOST,
	user: config.USER,
	password: config.PASSWORD,
	database: config.DATABASE,
	connectionLimit: 10,
});
