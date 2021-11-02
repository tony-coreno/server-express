const express = require("express");

const app = express();

app.set("Port", 4000);

app.listen(app.get("Port"), () => {
  console.log("Escuchando puerto", app.get("Port"));
});
