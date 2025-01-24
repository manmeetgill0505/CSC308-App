//backend.js 
import express from "express";
import cors from "cors";
import {nanoid} from "nanoid";
//imported the express module, cors module, and uuid library

const app = express();
//created an instance of express
const port = 8000;
//port number we are using 

app.use(cors());
app.use(express.json());
/*standard configuration with express to enable JSON format and with cors to enable all CORS request*/

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

const findUserByName = (name => {
	return users["users_list"].filter(
		(user) => user["name"] === name
	);
});
const findUserById = (id => 
	users["users_list"].find((user) => user["id"] === id));

const addUser = (user) => {
	user.id = nanoid() //generates a UUID
	users["users_list"].push(user);
	return user;
};//take a user object as input

const deleteUserById = (id => {
	console.log(id);
	const deletion = users["users_list"].findIndex(
		(user) => user["id"] === id
	);

	if (deletion !== -1) {
		users["users_list"].splice(deletion, 1);
		return true;
	}
	else {
		return false;
	}
});//take a user id and delete it

const findUserByNameAndJob = (name, job) => {
	return users["users_list"].filter(
		(user) => user["name"] === name && user["job"] === job
	);
}
//helper functions

app.get("/", (req, res) => {
	res.send("Hello World!");
});
//Setting up the first API endpoint (sends a plain message for now)

app.get("/users", (req, res) => {
	const name = req.query.name;
	const job = req.query.job;
	
	if (name != undefined && job == undefined) {
		let result = findUserByName(name);
		result = {users_list: result };
		res.send(result);
	}
	else if (job != undefined && name != undefined) {
		let result = findUserByNameAndJob(name, job);
		result = {users_list: result};
		res.send(result);
	}
	else {
		res.send(users);
	}
});
//sends users if users are requested
app.get("/users/:id", (req, res) => {
	const id = req.params["id"]; //or req.params.id
	let result = findUserById(id);
	if (result === undefined) {
		res.status(404).send("Resource not found.");
	}
	else {
		res.send(result);
	} //sends status to the client
});

app.delete("/users/:id", (req, res) => {
	const id = req.params.id;
	let result = deleteUserById(id);
	if (result === false) {
		res.status(404).send("Resource not found.");
	}
	else {
		res.send(users);
	}
});

app.post("/users", (req, res) => {
	const userToAdd = req.body; /* Extracts user data from the request's body */
	let user = addUser(userToAdd);
	if (user !== undefined) {
		res.status(201).json(user); //Sends a response back to the client
	}
});

app.listen(port, () => {
	console.log(
		`Example app listening at http://localhost:${port}`
	);
});
//making our backend server listen 