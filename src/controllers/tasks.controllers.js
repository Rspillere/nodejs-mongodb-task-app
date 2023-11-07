import Task from '../models/Task';

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('index', { tasks });
};

export const addTask = async (req, res) => {
    try {
        const task = Task(req.body);
        await task.save();
    } catch (error) {
        console.log(error);
    }

    res.redirect('/');
};

export const renderTaskEdit = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findById(id).lean()
        res.render('edit', {task})
        
    } catch (error) {
        console.log(error.message)
    }
}

export const updateTask = async(req, res)=>{
    const {id} = req.params

    await Task.findByIdAndUpdate(id, req.body)
    res.redirect('/')
}

export const deleteTask = async(req, res)=>{
    const {id} = req.params

    await Task.findByIdAndDelete(id, req.body)
    res.redirect('/')
}

export const toggleDoneTask = async(req, res)=>{
    const {id} = req.params

    const task = await Task.findById(id)
    task.done = !task.done
    await task.save()

    res.redirect('/')
}