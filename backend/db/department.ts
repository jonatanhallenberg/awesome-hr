import DepartmentModel, { IDepartment } from "./models/department"

export const addDepartment = async (department: IDepartment ) => {
    const newDepartment = new DepartmentModel(department);
    await newDepartment.save();
    return newDepartment;
}

export const getDepartmentById = () => {
    
}

export const getDepartments = () => {
    
}