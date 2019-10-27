const tasks =  require('../controllers/tasks');


module.exports = (app) => {
    app.get('/alltasks',(req,res) => tasks.getTasks(req,res))
    app.get('/task/one/:taskId', (req,res) => tasks.getOneTask(req,res))
    app.post('/task/create', (req,res) => tasks.createTask(req,res))
    app.put('/task/update/:taskId',(req,res) => tasks.updateTask(req,res))
    app.delete('/task/destroy/:taskId', (req,res) => tasks.deleteTask(req,res))
}