import app from "../app";
import * as http from "http";
import  chalk from 'chalk' ;

const server = http.createServer(app) ;

const port = process.env.PORT || 5000 ;

server.listen(port,()=>{
    console.log(chalk.greenBright(`app is running at port ${port}`))
});
server.on('error',(e)=>{

})
