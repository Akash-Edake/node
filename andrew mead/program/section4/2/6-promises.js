const doworkCallBack =(callback)=>{
    setTimeout(()=>{
        callback('this is error',undefined)
        // callback(undefined,[1,4,7])
    },2000)
}
doworkCallBack((error,result)=>{
    if(error){
     return   console.log(error)
    }
    console.log(result)
})


//✅ usein promiss
const doworkPromise = new Promise((resolve,rejecct)=>{
    setTimeout(() => {
        // resolve([7,4,1])
        rejecct('this is promise error')
    }, 2000);

})
doworkPromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
