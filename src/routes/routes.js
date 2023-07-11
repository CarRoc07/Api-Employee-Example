import { Router } from "express";
import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../controllers/employees.controller.js";

const employeesRouter = Router();

employeesRouter.get("/employees", getEmployees)

employeesRouter.get("/employees/:id", getEmployee)

employeesRouter.post("/employees", createEmployee)

employeesRouter.delete("/employees/:id", deleteEmployee)

employeesRouter.patch("/employees/:id", updateEmployee)

export default employeesRouter;