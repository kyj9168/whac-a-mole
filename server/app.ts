'use strict';
import appRootPath from 'app-root-path';
import express from 'express';
import * as config from './config/config.json';

const app = express();
const PORT = config.EXPRESS_PORT;


app.use(express.static(`${appRootPath}/build`));
app.use(express.static(`${appRootPath}/public`));
app.listen(PORT, () => {
	console.log(`
  ################################################
  🛡️  Server listening on port: ${PORT}🛡️
  ################################################
`);
});
