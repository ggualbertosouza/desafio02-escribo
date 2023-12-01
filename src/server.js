import express from "express";
import router from "./app/routes.js";

const app = express();

app.use(express.json());

// Roteamento
app.use(router);

// Server
const port = 3000;
app.listen(port, () =>
    console.log(`Server is running in http://localhost:${port}`)
);

export default app;