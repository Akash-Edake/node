const name = "javaScript";
const v = "ES6";

const obj = {
  name,
  version: v,
  level: "intermediate",
};
const { name: programmingLang, version, rating =5 } = obj;
console.log(programmingLang);
console.log(version);
console.log("if no property match in obj then u can use",rating);


const fun =(parameter,{ name: programmingLang, version, rating =5 })=>{
    console.log(parameter);
    console.log(programmingLang);
}

fun('argument',obj)