const express = require('express');
const app = express();
const PORT = 3000
const students = [
    { rollNo: 1, name: "krishna", section: "A", course: "Computer Science" },
    { rollNo: 2, name: "Rahul", section: "B", course: "Information Technology" },
    { rollNo: 3, name: "Anjali", section: "A", course: "Computer Science" },
    { rollNo: 4, name: "Amit", section: "C", course: "Data Science" },
    { rollNo: 5, name: "Priya", section: "B", course: "Information Technology" }
]
// Read Operation


app.get("/students", (req, res) => {
    res.json(students);
})
// Read operation with id
app.get("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    res.json({success:true,student});
})
app.listen(PORT, () =>console.log("server is running on port 3000"));
 
