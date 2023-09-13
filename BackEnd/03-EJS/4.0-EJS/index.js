import express from 'express';

const app=express();
const PORT=3000;

//set EJS as the view engine
app.set('view engine','ejs');

//root route
app.get('/',(req,res)=>{
    let dayOfTheWeek='';
    let categoryOfWork='';
    const date=new Date().getDay();
    if(date===1 || date===2 || date===3 || date===4 || date===5){
        dayOfTheWeek="weekDay";
        categoryOfWork="work hard!"
    }else{
        dayOfTheWeek="weekEnd";
        categoryOfWork="have fun!"
    }
    //object
    const dataToSend={
        day:dayOfTheWeek,
        work:categoryOfWork,
    };
    //render index.ejs and pass the data
    res.render('index.ejs',{data:dataToSend});
});

//listen the port
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
});