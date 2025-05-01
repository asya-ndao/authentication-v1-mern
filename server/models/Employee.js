import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Employee = mongoose.model("employees", EmployeeSchema)

export { Employee }