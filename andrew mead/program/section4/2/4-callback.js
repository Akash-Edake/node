const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      logitude: 30.1111,
      latitude: 29.87654,
    };
    // return(data)
    callback(data);
  }, 2000);
};

geoCode("pune", (data) => console.log(data));

const add = (a, b, callBack) => {
  setTimeout(() => {
    const total = a + b;
    callBack(total);
  }, 2000);
};

add(1, 4, (total) => {
  console.log(`total addition is ${total}`);
});
