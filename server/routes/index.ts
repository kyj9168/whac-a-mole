import appRootPath from 'app-root-path';
import express from 'express';
import path from 'path';
export const indexRouter = express.Router();
import { pool } from '../database';
import { Rank } from '../interfaces/rank';

indexRouter.post('/addList', async (req, res, next) => {
	const { nickname, score } = req.body;
	const conn = await pool.getConnection();
	try {
		const [insertResult] = (await conn.query('INSERT INTO ranking (  nickname, score) VALUE(?, ?);', [
			nickname,
			score,
		])) as any;
		await conn.commit(); // 커밋

		if (insertResult.affectedRows === 1) {
			const [result] = (await conn.query('SELECT  * FROM ranking ORDER BY score DESC LIMIT 10;')) as any;
			res.json({ result });
		}
	} catch (err) {
		await conn.rollback(); // 롤백
		throw err;
	} finally {
		conn.release(); // conn 회수
	}
});
