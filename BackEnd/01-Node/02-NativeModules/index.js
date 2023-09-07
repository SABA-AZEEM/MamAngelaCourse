import fs from'fs'
//write in file
let msg="Hello my name is saba azeem."
fs.writeFile("msg.txt",msg,(err)=>{
    if(err)
        throw err;
    console.log("file writing completed");
});
//Read file
fs.readFile("msg.txt",'utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})
