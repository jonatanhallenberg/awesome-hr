import TimelogModel, { ITimeLog } from "./models/timelog";
import { EmployeeModel } from "./models/department";

export const addTimeLogToEmployee = async (employeeId: string, timeLog: ITimeLog) => {
    const employee = await EmployeeModel.find()
    console.log(employee);
}