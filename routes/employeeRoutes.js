import express from "express";
import {
  getAll,
  showAdd,
  addEmployee,
  deleteEmployee,
  showEdit,
  updateEmployee
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/add", showAdd);
router.post("/add", addEmployee);
router.get("/edit/:id", showEdit);
router.post("/update/:id", updateEmployee);
router.get("/delete/:id", deleteEmployee);

export default router;
