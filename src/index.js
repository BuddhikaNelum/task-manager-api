const express = require('express')
const chalk = require('chalk')
require('../src/db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT || 9000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.use('/', (req, res) => {
    res.send('Task Manager API Started')
})

app.listen(port, () => {
    console.log(chalk.green('Server is up on port ') + port)
})

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    // const task = await Task.findById('5f255655ecef6a2684dccc5d')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5f255580f5af160ba82a4a6f')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

//main()