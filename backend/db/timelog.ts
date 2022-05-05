import TimelogModel, { ITimeLog } from "./models/timelog";
import DepartmentModel from "./models/department";

export const addTimeLogToEmployee = async (departmentId: string, employeeId: string, timeLog: ITimeLog) => {
    const department = await DepartmentModel.findById(departmentId);

    if (!department) {
         throw '404';
    } else {
        const employee = department.employees.find(employee => employee._id?.toString() === employeeId);

        if (!employee) {
            throw '404';
        } else {
            
            //Skapa timelog i timelog-collection
            const newTimeLog = new TimelogModel(timeLog);
            await newTimeLog.save();

            //Pusha in referens i department-document
            employee.timelogs.push(newTimeLog);
            await department.save();
            return newTimeLog;
        }
    }
}