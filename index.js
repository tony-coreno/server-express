const express = require("express");

require('dotenv').config();

const app = express();

app.set("Port", process.env.PORT);

app.listen(app.get("Port"), () => console.log("Escuchando puerto", app.get("Port")));

