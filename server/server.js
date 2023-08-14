import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import router from "./router/route.js";
const app = express();
import connect from './database/conn.js'


const port = 3005;

/***Middleware */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hackers know about your stack

//Api routes
app.use("/api", router);

/**Start Server Only when we have a valid connection*/
connect().then(()=>{
  try{
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`)
    });
  }
  catch(error){
    console.log("invalid database connection")
  }
})
.catch(error=>{
  console.log("were here")
})
