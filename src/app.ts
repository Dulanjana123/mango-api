import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);


app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
