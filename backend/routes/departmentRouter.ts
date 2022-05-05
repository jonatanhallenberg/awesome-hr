import { Router, Request, Response } from 'express';
import { addDepartment } from '../db/department';
import { addEmployeeToDepartment } from '../db/employee';

const router = Router();

router.post('/departments', async (req: Request, res: Response) => {
    const department = await addDepartment(req.body);
    
    res.json(department);
})

router.post('/departments/:departmentId/employees', async (req: Request, res: Response) => {
    const department = await addEmployeeToDepartment(req.params.departmentId, req.body);
    res.json(department);
})

export default router;