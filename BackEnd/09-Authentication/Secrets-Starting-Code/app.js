//jshint esversion:6
import express from 'express';
import ejs from 'ejs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app=express();

app.use(express.static('public'));
app.set('view engine','ejs');
//Parse JSON data
app.use(express.json());
//Parse URL-encoded data
app.use(express.urlencoded({extended:true}));
//connected with mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('Connected to DB'))
    .catch((err)=>console.log(err.message))
//Define schema for mongo db
const userSchema={
    email:String,
    password:String,
};
//Define model for data base
const User=new mongoose.model('User',userSchema);

//render home page
app.get('/',(req,res)=>{
    res.render('home');
});
//render register page
app.get('/register',(req,res)=>{
    res.render('register');
});
//render login page
app.get('/login',(req,res)=>{
    res.render('login');
});
//post data from register page
app.post('/register',(req,res)=>{
    const userName=req.body.username;
    const password=req.body.password;

    User.findOne({email:userName})
        .then((founUser)=>{
            if(founUser){
                res.render('login');
            }else{
                const newUser=new User({
                    email:req.body.username,
                    password:req.body.password,
                });
                newUser.save()
                .then(()=>{
                    res.render('secrets');
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
});
//post data from login page
app.post('/login',(req,res)=>{
    const userName=req.body.username;
    const password=req.body.password;

    User.findOne({email:userName})
        .then((founUser)=>{
            if(founUser.password===password){
                res.render('secrets');
            }
        })
        .catch((err)=>{
            console.log(err);
        })
})

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});