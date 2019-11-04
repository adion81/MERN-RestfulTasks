const tasks =  require('../controllers/tasks');


module.exports = (app) => {
    app.get('/api/tasks',(req,res) => tasks.getTasks(req,res));
    app.get('/api/task/:taskId', (req,res) => tasks.getOneTask(req,res));
    app.post('/task/create', (req,res) => tasks.createTask(req,res));
    app.put('/api/task/update/:taskId',(req,res) => tasks.updateTask(req,res));
    app.delete('/api/task/destroy/:taskId', (req,res) => tasks.deleteTask(req,res));
}