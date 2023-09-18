import mongoose from 'mongoose';
                        //create connection with our local server
mongoose.connect('mongodb://127.0.0.1:27017/Person',{useNewUrlParser:true});
                        //Define Schema
const personSchema=new mongoose.Schema({
                        //Data validation
    name:{
        type:String,
        required:[true,`Please check your name, it's not specified!`],
    },
    age:{
        type:Number,
        min:0,
        max:100,
    },
    
});
                    //Create Model
const Person=mongoose.model("Person",personSchema);
                    //Create single document
const person1=new Person({
    name:"Saba Azeem",
    age:24,
});
                   //save document(this is write only for single document)
//person1.save();
                    //Create Many document
// Person.insertMany([
//     {name:"Ali",age:19},
//     {name:"Zainab",age:21},
//     {name:"Abdul Kareem",age:17},
// ]).then((docs)=>{
//     console.log("Multiple Elements inserted:"+docs);
// }).catch((error)=>{
//     console.log("Error during inserting documents:",error);
// });
                    //Read data from document
Person.find()
.then((people)=>{
    //console.log("All documents is the collection are:",people);
    people.forEach((person)=>{
        console.log(person.name);
    });
    //if i don't want to close the connection manually(ctrl+c), then in the last action i close the database connecton
    mongoose.connection.close();
}).catch((error)=>{
    console.log("Error during fetching collection is:",error);
});

