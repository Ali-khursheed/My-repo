const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const getUserData = () => {
	const data = fs.readFileSync(path.join(__dirname, "user.json"), "utf-8");
	return JSON.parse(data);
};

app.get("/", (req, res) => {
	const user = getUserData();
	const User_name = `<ul>
	${user.map((e) => `<li>${e.first_name}</li>`).join("")}
	</ul>`;
	res.send(User_name);
});
app.get("/user/:id", (req, res) => {
	const user = getUserData();
	const unique_id = user.filter((e) => {
		// e.id == req.params.id;
		const ok = e.id == req.params.id;
		return ok;
	});
	res.send(unique_id);
});

app
	.route("/api/user")
	.get((req, res) => {
		const user = getUserData();
		res.json(user);
	})
	.post((req, res) => {
		const user = getUserData();
		const new_user = req.body;
		const final_user = { id: user.length + 1, ...new_user };
		user.push(final_user);
		fs.writeFile("./user.json", JSON.stringify(user), (err, data) => {
			if (err) {
				res.status(500).json({
					error: "New user not added",
				});
			} else {
				res.status(200).json({
					message: "New user created successfully",
					data: final_user,
				});
			}
		});
	});

app.patch("/user/:id", (req, res) => {
	const user = getUserData(); // get user array
	const userId = parseInt(req.params.id); // get ID from URL
	const userDataToUpdate = req.body; // get update data from body

	let updatedUser;
	let userExists = false;

	const updatedUsers = user.map((u) => {
		if (u.id === userId) {
			userExists = true;
			updatedUser = { ...u, ...userDataToUpdate }; // merge old and new data
			return updatedUser;
		}
		return u;
	});

	if (!userExists) {
		return res.status(404).json({ error: "User not found" });
	}

	// Save updated data
	fs.writeFileSync("./user.json", JSON.stringify(updatedUsers, null, 2));

	// Send success response
	res.status(200).json({
		message: "User updated successfully",
		data: updatedUser,
	});
});

app.listen(port, () => {
	return console.log(`Your project is running on ${port}`);
});
