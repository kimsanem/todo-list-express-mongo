const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv" );
const cors = require("cors");

const PORT = 8000;

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);


mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error("Error connecting to MongoDB:", err);
	});


app.listen(PORT, async () => {
	console.log(`server up on port ${PORT}`);
	console.log("Visit http://localhost:8000 to see the API in action!");
	console.log("Press Ctrl+c to stop the server.");
});