//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path'
import { fileURLToPath } from 'url';

const app=express();
const __dirname=dirname(fileURLToPath(import.meta.url));
const PORT=3000;
let userIsAuthorised=false;

function passwordCheck(req,res,next){
    if(req.body['password']==='ILoveProgramming'){
        userIsAuthorised=true;
    }
    next();
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(passwordCheck)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post('/check',(req,res)=>{
    if(userIsAuthorised){
        res.sendFile(__dirname+"/public/secret.html");
        userIsAuthorised=false;
    }else{
        res.redirect('/');
    }
})


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});
