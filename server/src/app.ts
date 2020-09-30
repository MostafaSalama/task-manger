import express from 'express';
import * as dotEnv from 'dotenv';
import { MongooseConnection } from './config';
import  testMiddleware from './middleware/auth' ;
import chalk from 'chalk';
dotEnv.config();
new MongooseConnection(<string>process.env.MONOG_URL, (err) => {
	if (!err) {
		console.log(chalk.greenBright('connected to mongodb'));
		return ;
	}
});

const app = express();
app.use(function (request,response,next) {
	console.log(request.headers.cookie);
	next();
}) ;
app.get('/',(req,res)=>{
	res.cookie('hello','what',{
		httpOnly:true,
	})
	res.send('hello world') ;
})
export default app;
