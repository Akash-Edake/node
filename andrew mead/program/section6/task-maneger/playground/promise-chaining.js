require('../src/db/mongoose')

const User = require('../src/models/users')

User.findByIdAndUpdate("653e056249273afc076ffba6",{age:11}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:11})
}).then((count)=>{
console.log(count)
}).catch((e)=>{
    console.log(e)
})