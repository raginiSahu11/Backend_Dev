import express from "express";
import methodOverride from "method-override";
import employeeRoutes from "./routes/employeeRoutes.js";
import logger from "./middleware/logger.js";
import path from "path";
import { fileURLToPath } from "url";


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(logger);

app.use("/", employeeRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

