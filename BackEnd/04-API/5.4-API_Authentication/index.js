import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "123saba456";
const yourPassword = "123saba456";
const yourAPIKey = "0c968f12-9f87-4193-9200-2d5b370685c2";
const yourBearerToken = "7466c2a2-a2f7-44b4-9522-d770c193ffff";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const response=await axios.get(API_URL+'random');
    const result=JSON.stringify(response.data);
    res.render('index.ejs',{content:result});
  }catch(error){
    console.error("Failed to make request:",error.message);
  }

});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 try{
  const options={
    auth:{
      username:yourUsername,
      password:yourPassword,
    }
  };
  const response=await axios.get(API_URL+'all?page=2',options);
  const result=JSON.stringify(response.data);
  res.render("index.ejs",{content:result});
 }catch(error){
  console.error("Failed to make request:",error.message);
 }
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const options={
      params:{
        score:5,
        apiKey:yourAPIKey,
      },
    }
    const response=await axios.get(API_URL+`filter`,options);
    const result=JSON.stringify(response.data);
    res.render('index.ejs',{content:result});
  }catch(error){
    console.error("Failed to make request:",error.message);
  }
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 const options={
  headers:{
    Authorization:`Bearer ${yourBearerToken}`,
  },
 };
 try{
  const response=await axios.get(API_URL+'secrets/42',options);
  const result=JSON.stringify(response.data);
  res.render("index.ejs",{content:result});
 }catch(error){
  console.error("Failed to make request:",error.message);
 }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
