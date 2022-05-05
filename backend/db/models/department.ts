import { Schema, model } from 'mongoose';

export interface IEmployee {
    _id?: string,
    firstname: string,
    lastname: string,
    timelogs: any[]
}

export interface IDepartment {
    name: string,
    employees: IEmployee[],
}

const employeeSchema = new Schema<IEmployee>({
    firstname: String,
    lastname: String,
    timelogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "timelog",
        }
    ]
});

export const EmployeeModel = model("employee", employeeSchema);

const departmentSchema = new Schema<IDepartment>({
    name: String,
    employees: [employeeSchema]
})

const DepartmentModel = model("department", departmentSchema);

export default DepartmentModel;