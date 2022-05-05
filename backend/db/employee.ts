import DepartmentModel, { IEmployee } from "./models/department";

export const addEmployeeToDepartment = async (departmentId: string, employee: IEmployee) => {
    const department = await DepartmentModel.findById(departmentId);

    if (!department) {
        throw '404';
    } else {
        department.employees.push(employee);
        await department.save();
        return department;
    }
}