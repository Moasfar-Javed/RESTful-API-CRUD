const Student = require("./studentModel");

//create
const addStudent = (req, res) => {
  const student = new Student({
    name: req.body.name,
    enrollment: req.body.enrollment,
  });

  student.save((err, student) => {
    if (err) {
      res.send(err);
    }
    res.json(student);
  });
};

//read all
const getStudents = (req, res) => {
  Student.find((err, student) => {
    if (err) {
      res.send(err);
    }
    res.json(student);
  });
};
//read by id
const getStudentByID = (req, res) => {
  Student.findOne({ _id: req.params.id }, (err, Student) => {
    if (err) {
      res.send(err);
    } else res.json(Student);
  });
};

//update
const updateStudent = (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        enrollment: req.body.enrollment,
      },
    },
    {
      new: true,
    },
    (err, Student) => {
      if (err) {
        res.send(err);
      } else res.json(Student);
    }
  );
};

//delete
const deleteStudent = (req, res) => {
  Student.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: "deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getStudents,
  getStudentByID,
  addStudent,
  updateStudent,
  deleteStudent,
};
