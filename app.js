const express = require("express");

const app = express();

app.get("/", (rq, rs) => {
	rs.send("Hola tarola");
});

app.listen(3000, () => {
	console.log("Testing simplest app in express...");
});
