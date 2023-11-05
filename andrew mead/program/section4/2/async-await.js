const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(a<0 || b<0){
            reject("negative Number Not allow")
        }
      resolve(a + b);
    }, 2000);
  });
};

const doWork =async () => {
    const sum = await add(1,-10)
    const sum2 = await add(sum,10)
    const sum3 = await add(sum2,10)
    return sum3
};

doWork().then(console.log).catch(err=>console.log(err))