// let obj={
//     name: "amit",
//     last: "Ghosh",
//     age: 27
// }

// function upperCase(obj){
//   for(key in obj){
//   let newkey= key.toUpperCase()
//   obj[newkey]=obj[key]
//     delete obj[key]
//     // ans[newKey]=obj[key]
//   }
// }

// upperCase(obj)
// console.log(obj)

const fs= require("fs")
const path= require("path")
const dirPath= path.join(__dirname,"testing")
const dirPath2= path.join(__dirname,"checking")

console.log(dirPath)
// fs.writeFile("./data","amit is good",(err)=>{

// })



// fs.rename("./data","./data.txt",(err)=>{
//     if(err){
//         console.log("something error")
//     }else{
//         console.log("file rename success")
//     }
// })



//  create multiple files under a loop

// for(let i=0; i<5; i++){

//     fs.writeFile(`${dirPath}/abc${i}.txt`,"I am Amit",(err)=>{
//         if(err){
//             console.log("error somting")
//         }else{
//             console.log("done")
//         }
//     })
// }


// fs.readdir(dirPath,(err,files)=>{
//     console.log(files.length)
//    files.map((el,i)=>fs.readFile(`${dirPath}/abc${i}.txt`,{encoding: "utf-8"},(err,data)=>{
//       console.log(data)
//    }))
// })



// create folder
// fs.mkdir("./checking",(err)=>{

// })

// fs.rmdir(`${dirPath2}`,(err)=>{
    
// })

// print extname of file
// let x=path.extname(`${dirPath}/abc0.txt`);
// console.log(x)


