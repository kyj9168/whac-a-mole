'use strict';
import appRootPath from 'app-root-path';
import express from 'express';
import * as config from './config/config.json';
import { indexRouter } from './routes';

const app = express();
const PORT = config.EXPRESS_PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use(express.static(`${appRootPath}/build`));
app.use(express.static(`${appRootPath}/public`));

app.listen(PORT, () => {
	console.log(`
  ################################################
  🛡️  Server listening on port: ${PORT}🛡️
  ################################################
  ******************* config *********************
  * express_port : ${config.EXPRESS_PORT}
  * mysql_port : ${config.MYSQL_HOST}
  * data_base : ${config.DATABASE}
  ************************************************
`);
});
