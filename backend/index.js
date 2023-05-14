import Express  from "express";
import bodyParser from 'body-parser';
import userRouter from './routes/user.js'




const app = Express ( );
const PORT = 7272

app.use(bodyParser.json());


app.use('/users' , userRouter);


app.get('/' , (req,res)=> res.send('hello from my page '));


app.listen(PORT,()=>{
    console.log(`server running on  port: http://localhost:${PORT}`);
})

