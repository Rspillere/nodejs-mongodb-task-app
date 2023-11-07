import { Router } from 'express';
import {
    renderTasks, 
    addTask,
    renderTaskEdit,
    updateTask,
    deleteTask,
    toggleDoneTask,
} from '../controllers/tasks.controllers';

const router = Router();

router.get('/', renderTasks);

router.post('/tasks/add', addTask);

router.get('/tasks/:id/edit', renderTaskEdit);

router.post('/tasks/:id/edit', updateTask);

router.get('/tasks/:id/delete', deleteTask);

router.get('/tasks/:id/toggleDone', toggleDoneTask);

export default router;
