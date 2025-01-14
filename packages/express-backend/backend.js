//backend.js 
import express from "express";
//imported the express module 

const app = express();
//created an instance of express

const port = 8000;
//port number we are using 

app.use(express.json());
//standard configuration so in JSON format

const users = {
	users_list: [
	{
		id: "xyz789",
		name: "Charlie",
		job: "Janitor"
	},
	{
		id: "abc123",
		name: "Mac",
		job: "Bouncer"
	},
	{
		id: "ppp222",
		name: "Mac",
		job: "Professor"
	},
	{
		id: "yat999",
		name: "Dee",
		job: "Aspiring actress"
	},
	{
		id: "zap555",
		name: "Dennis",
		job: "Bartender"
	}]
};
//We defined list of users and theri random ids (pairs and keys)

app.get("/", (req, res) => {
	res.send("Hello World!");
});
//Setting up the first API endpoint (sends a plain message for now)

app.get("/users", (req, res) => {
	res.send(users);
});
//sends users if users are requested

app.listen(port, () => {
	console.log(
		`Example app listening at http://localhost:${port}`
	);
});
//making our backend server listen 