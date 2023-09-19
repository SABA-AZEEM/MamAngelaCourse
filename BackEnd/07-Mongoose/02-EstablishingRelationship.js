import mongoose from 'mongoose';
            //Create connection with our local server
mongoose.connect('mongodb://127.0.0.1:27017/Student',{useNewUrlParser:true});
            //Define fruit Schema
const fruitSchema=new mongoose.Schema({
    name:String,
    price:Number,
});
            //Define Student Schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter your name first!"],
    },
    age:Number,
    fruit:fruitSchema,
});

            //Create Model of Student
const Student=mongoose.model('Student',studentSchema);
            //Create model for Fruits
const Fruit=mongoose.model('Fruit',fruitSchema);
            //Create single document for fruit
const apple=new Fruit({
    name:'Apple',
    price:100,
});
            //Create single document for student
const saba=new Student({
    name:'Saba Azeem',
    age:23,
    fruit:apple,
});
            //save fruit document
apple.save();
            //save student document
saba.save();