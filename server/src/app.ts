import express from 'express';
import * as dotEnv from 'dotenv';
import { MongooseConnection } from './config';
import chalk from 'chalk';
dotEnv.config();
new MongooseConnection(<string>process.env.MONOG_URL, (err) => {
	if (!err) {
		console.log(chalk.greenBright('connected to mongodb'));
		return ;
	}
});

const app = express();

export default app;
