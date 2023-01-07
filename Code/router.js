const {
  getStudents,
  getStudentByID,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("./studentController");

const router = require("express").Router();

//routings
router.get("/students", getStudents);
router.get("/students/:id", getStudentByID);
router.post("/students", addStudent);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

module.exports = router;
