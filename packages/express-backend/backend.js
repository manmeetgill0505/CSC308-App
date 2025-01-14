//backend.js 
import express from "express";
//imported the express module 

const app = express();
//created an instance of express

const port = 8000;
//port number we are using 

app.use(express.json());
//standard configuration so in JSON format

app.get("/", (req, res) => {
	res.send("Hello World!");
});
//Setting up the first API endpoint (sends a plain message for now)

app.listen(port, () => {
	console.log(
		`Example app listening at http://localhost:${port}`
	);
});
//making our backend server listen 