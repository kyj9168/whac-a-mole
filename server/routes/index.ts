import appRootPath from 'app-root-path';
import express from 'express';
import path from 'path';
export const indexRouter = express.Router();

indexRouter.get('/test', (req, res, next) => {
    console.log(123123);
    res.send('TEST입니다.');
});
indexRouter.post('/post', (req, res, next) => {
    console.log(123123);
    res.send({ id: 1, name: 'User123' });
});
