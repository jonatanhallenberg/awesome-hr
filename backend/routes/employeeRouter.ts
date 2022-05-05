import { Router, Request, Response } from 'express';
import { addDepartment } from '../db/department';
import { addTimeLogToEmployee } from '../db/timelog';

const router = Router();

router.post('/departments/:departmentId/employees/:employeeId/timelogs', async (req: Request, res: Response) => {
    const timeLog = await addTimeLogToEmployee(req.params.departmentId, req.params.employeeId, req.body);
    res.json(timeLog);
})

export default router;