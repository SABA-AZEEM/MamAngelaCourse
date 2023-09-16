import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const PORT=8000;

app.get('/',(req,res)=>{
    res.render("index.ejs");
});

app.post('/submit',async(req,res)=>{
    let cityName=req.body.city_name;
    const api_key='dff65676479a9af0919fffb722a6baab'
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;
    
    try{
        const result=await axios.get(url);
        res.render('index.ejs',{
            city_country:result.data.name+","+result.data.sys.country,
            temp:Math.floor(result.data.main.temp-273.15),
            weather_description:result.data.weather[0].description,
        });
        console.log(result.data);
    }catch(error){
        console.error("Failed to get data:",error);
    }
});

app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
});