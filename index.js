const Fist_user = {
	id: 1,
	name: "ALi khursheed",
	age: "23",
};
const Second_User = {
	name: "Umar Khursheed",
	age: "25",
};
console.log({ ...Fist_user, ...Second_User });
// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const user = require("./user.json");
// const { json } = require("stream/consumers");
// const app = express();
// const port = 3000;

// // Middleware to read latest user data from file
// const getUserData = () => {
// 	const data = fs.readFileSync(path.join(__dirname, "user.json"));
// 	return JSON.parse(data);
// };

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.listen(port, () => console.log(`Your project is running on ${port}`));

// // GET: Render user list as HTML
// app.get("/user", (req, res) => {
// 	const user = getUserData();
// 	const Username = `<ul>
//     ${user.map((e) => `<li>${e.first_name}</li>`).join("")}
//     </ul>`;
// 	res.send(Username);
// });

// // GET: Get user by ID
// app.get("/api/user/:id", (req, res) => {
// 	const user = getUserData();
// 	const new_user = user.find((u) => u.id == req.params.id);
// 	if (!new_user) return res.status(404).json({ error: "User not found" });
// 	return res.json(new_user);
// });

// // CRUD routes
// app
// 	.route("/api/user")
// 	// GET all users
// 	.get((req, res) => {
// 		const user = getUserData();
// 		res.json(user);
// 	})

// 	.post((req, res) => {
// 		const New_user = req.body;
// 		const finalUser = { ...New_user, id: user.length + 1 };
// 		user.push(finalUser);
// 		// console.log("finalUser", finalUser);

// 		fs.writeFile("./user.json", JSON.stringify(New_user), (err) => {
// 			if (err) {
// 				res.status(500).json({ error: "Cant add the ew user" });
// 			} else {
// 				res.status(200).json({
// 					message: "NEw user Creasted Sucessfully",
// 					data: finalUser,
// 				});
// 			}
// 		});
// 	})

// 	// POST: Add new user
// 	// .post((req, res) => {
// 	// 	const New_user = user;
// 	//     const new_user = }
// 	// const user = getUserData();
// 	// const New_user = req.body;
// 	// const newId = user.length > 0 ? user[user.length - 1].id + 1 : 1;

// 	// const finalUser = { id: newId, ...New_user };
// 	// user.push(finalUser);

// 	// fs.writeFile(
// 	// 	path.join(__dirname, "user.json"),
// 	// 	JSON.stringify(user, null, 2),
// 	// 	(err) => {
// 	// 		if (err) {
// 	// 			console.error(err);
// 	// 			return res.status(500).json({
// 	// 				status: "error",
// 	// 				message: "Failed to save user.",
// 	// 			});
// 	// 		}
// 	// 		res.status(201).json({
// 	// 			status: "success",
// 	// 			message: "User Created",
// 	// 			data: finalUser,
// 	// 		});
// 	// 	}
// 	// );
// 	// )

// 	// PATCH (not implemented)
// 	.patch((req, res) => {
// 		res.status(501).json({ message: "PATCH route not implemented yet." });
// 	})

// 	// DELETE (not implemented)
// 	.delete((req, res) => {
// 		res.status(501).json({ message: "DELETE route not implemented yet." });
// 	});
