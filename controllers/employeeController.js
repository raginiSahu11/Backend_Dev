import { employees } from "../models/employeeModel.js";

// Salary function
function calculateSalary(basic) {
  return basic + basic * 0.2 + basic * 0.1 - basic * 0.05;
}

// Show all employees
export function getAll(req, res) {
  res.render("index", { employees });
}

// Show add page
export function showAdd(req, res) {
  res.render("addEmployee");
}

// Add employee
export function addEmployee(req, res) {
  const { name, department, salary, avatar, joiningDate, gender } = req.body;

  const emp = {
    id: Date.now().toString(),
    name,
    department,
    basicSalary: Number(salary),
    netSalary: calculateSalary(Number(salary)),
    avatar,
    joiningDate,
    gender
  };

  employees.push(emp);
  res.redirect("/");
}



// Delete employee
export function deleteEmployee(req, res) {
  const id = req.params.id;
  const index = employees.findIndex(e => e.id === id);
  employees.splice(index, 1);
  res.redirect("/");
}

// Show edit page
export function showEdit(req, res) {
  const emp = employees.find(e => e.id === req.params.id);
  res.render("editEmployee", { emp });
}

// Update employee
export function updateEmployee(req, res) {
  const emp = employees.find(e => e.id === req.params.id);

  emp.name = req.body.name;
  emp.department = req.body.department;
  emp.basicSalary = Number(req.body.salary);
  emp.netSalary = calculateSalary(Number(req.body.salary));
  emp.avatar = req.body.avatar;
  emp.joiningDate = req.body.joiningDate;
  emp.gender = req.body.gender;

  res.redirect("/");
}


