import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  let noOfLetters=req.body['fName'].length+req.body['lName'].length;
  res.render('index.ejs',{
    heading:`Your name has ${noOfLetters} digits`,
  });
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

