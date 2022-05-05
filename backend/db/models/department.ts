import { Schema, model } from 'mongoose';

interface IEmployee {
    firstname: string,
    lastname: string
}

interface IDepartment {
    name: string,
    employees: IEmployee[]
}

const employeeSchema = new Schema<IEmployee>({
    firstname: String,
    lastname: String
});

const EmployeeModel = model("employee", employeeSchema);

const departmentSchema = new Schema<IDepartment>({
    name: String,
    employees: [ EmployeeModel ]
})