import * as express from 'express';
import * as path from 'path';
import { startDBConnection, closeDBConnection } from './database';

const app: express.Application = express();
const port: number = 3000;

import { config } from 'dotenv';
import index from './routes/index'
import user from './routes/user';
import vaccine from './routes/vaccine';
import dose from './routes/dose';
import errorHandler from './middleware/errorHandler';


config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'));
app.use('/', index);
app.use('/user', user);
app.use('/vaccine', vaccine);
app.use('/dose', dose);
//error handler
app.use(errorHandler);

(async () => {
  await Promise.all([startDBConnection()]);
  app.listen(port, () => {
    console.log(`Hehe boi ${port}.`);
  });
})();

process.on('SIGINT', async function () {
	console.log('Switiching off all connections. Please wait..');

	await closeDBConnection();

	console.log('All connections are closed!');

	//	log.info('All connections are closed!');

	process.exit(1);
});
