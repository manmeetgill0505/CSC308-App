// src/MyApp.jsx
import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form"
function MyApp() {
	const [characters, setCharacters] = useState([]);
	function deleteUser(index) {
		const characterToDelete = characters[index].id;
		const url1 = "http://localhost:8000/users/";
		const url2 = url1 + characterToDelete;
		const promise = fetch(url2, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		
		return promise;
	}
	
	function removeOneCharacter(index) {
		
		deleteUser(index)
		.then(() => {
			const updated = characters.filter((character, i) => i !== index);
			setCharacters(updated);
			console.log("Characters deleted successfully.");
		})
		.catch((error) => {
			console.error("Character could not be deleted: ", error);
		});
	}
		
	
	function postUser(person) {
		const promise = fetch("http://localhost:8000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(person),
		}).then((res) => res.json());
		return promise;
	}
	
	function updateList(person) {
		postUser(person)
			.then((user) => {
				setCharacters([...characters, user])
			})
			.catch((error) => {
				console.log(error);
			});

	}
	
	function fetchUsers() {
		const promise = fetch("http://localhost:8000/users");
		return promise;
	} // does not return data immediately but returns a promise
	
	useEffect(() => {
		fetchUsers()
			.then((res) => res.json())
			.then((json) =>setCharacters(json["users_list"]))
			.catch((error) => {console.log(error);});
	},	[]	);
	
	
	return (
			<div className="container">
				<Table 
					characterData={characters} 
					removeCharacter={removeOneCharacter}
				/>
				<Form handleSubmit={updateList} />
			</div>
		);
}
export default MyApp;