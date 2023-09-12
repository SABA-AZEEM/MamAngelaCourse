import express from "express";
import bodyParser from "body-parser";
import {dirname} from 'path';
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));

function bandNameGenerator(req,res,next){
  bandName=req.body['street']+req.body['pet'];
  next();
}

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;
let bandName='';
app.use(bandNameGenerator);

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html');
});

app.post('/submit',(req,res)=>{
  res.send(`<h1>Your band name is:</h1><h3>${bandName}</h3>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
