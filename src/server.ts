import express, {Request, Response} from "express";

const PORT = 3333;
const app = express();
app.use(express.json());

app.listen(3333, () => {1
    console.log(`Server is Running on port ${PORT}`);
});
