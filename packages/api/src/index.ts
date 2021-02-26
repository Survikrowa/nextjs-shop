import express from "express";

require("dotenv").config();
const app = express();
const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));
