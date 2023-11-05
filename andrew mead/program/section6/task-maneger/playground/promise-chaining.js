require('../src/db/mongoose')

const User = require('../src/models/users')

// User.findByIdAndUpdate("653e056249273afc076ffba6",{age:11}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:11})
// }).then((count)=>{
// console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCOunt = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCOunt("653e056249273afc076ffba6",69).then(console.log).catch(console.log)