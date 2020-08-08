require('../src/db/mongoose')
const Task = require('../src/models/task')
const { count } = require('../src/models/task')

// Task.findByIdAndRemove('5f143faed3c09f1074da8b45').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5f143fa0d3c09f1074da8b44').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})