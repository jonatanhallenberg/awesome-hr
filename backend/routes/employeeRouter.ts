import { Router, Request, Response } from 'express';
import { addDepartment } from '../db/department';
import { addTimeLogToEmployee } from '../db/timelog';

const router = Router();

router.post('/employees/:employeeId/timelogs', async (req: Request, res: Response) => {
    const timelog = await addTimeLogToEmployee(req.params.employeeId, req.body);
    res.send("Hej");
})

export default router;