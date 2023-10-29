import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const PORT=3000;
const todayArr=[];
const workArr=[];
//date
const date=new Date();
const currentYear=date.getFullYear();
const options={
    weekday:'long',
    month:'long',
    day:'numeric',
};
const current=date.toLocaleDateString('en-US',options);

app.set('view-engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//root route
app.get('/',(req,res)=>{
    res.render('index.ejs',{
        tasks:todayArr,
        heading:current,
        year:currentYear,
    });
});
app.get('/work',(req,res)=>{
    res.render('toDayList.ejs',{
        tasks:workArr,
        heading:'Work List',
        year:currentYear,
    });
});
//route for submit form
app.post('/submitToday',(req,res)=>{
    let task=req.body.task;
    todayArr.push(task);
    console.log(todayArr);
    res.render('index.ejs',{
        tasks:todayArr,
        heading:current,
        year:currentYear,
    });
})
app.post('/submitWork',(req,res)=>{
    let task=req.body.task;
    workArr.push(task);
    console.log(workArr);
    res.render('toDayList.ejs',{
        tasks:workArr,
        heading:'Work List',
        year:currentYear,
    });
})

//listen the port
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
});