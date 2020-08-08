require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5f143f93d3c09f1074da8b43', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5f186a3c32690e078091a064', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})