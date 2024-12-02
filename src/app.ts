import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index";
import { errorMiddleware } from "./middlewares/error.middleware";
import productRoutes from "./routes/product.Routes";
import orderRoutes from "./routes/order.Routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
