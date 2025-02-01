//backend.js
import userHelper from "./user-services.js"; 
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
/*
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

/*
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
*/

app.get("/", (req, res) => {
	res.send("Hello World!");
});
//Setting up the first API endpoint (sends a plain message for now)

app.get("/users", (req, res) => {
	const {name, job} = req.query;
	let users = userHelper.getUsers(name, job)
		.then(users => res.json(users))
        .catch(error => res.status(500).json({ error: error.message }));;
});
//sends users if users are requested
app.get("/users/:id", (req, res) => {
	const id = req.params["id"]; //or req.params.id
	let result = userHelper.findUserById(id)
		.then(result => res.json(result))
		.catch(error => res.status(404).json({error: error.message}));;	
});

app.delete("/users/:id", (req, res) => {
	const id = req.params.id;
	let result = userHelper.deleteUserById(id)
		.then(result => {
			if (result) {
				res.status(200).json({ message: "User deleted successfully" });
			} else {
				res.status(404).json({ error: "User not found" });
			}
		})
		.catch(error => res.status(404).json({error: error.message}));;
});

app.post("/users", (req, res) => {
	const userToAdd = req.body; /* Extracts user data from the request's body */
	//userToAdd.id = nanoid()
	let user = userHelper.addUser(userToAdd)
		.then(user => {
			res.status(201).json(user);
		})
		.catch(error => res.status(400).json({ error: error.message }));;
});

app.listen(port, () => {
	console.log(
		`Example app listening at http://localhost:${port}`
	);
});
//making our backend server listen 