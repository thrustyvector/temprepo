// just a way to use some of the async files
const {readFile,writeFile}= require('fs')

//if you dont provide the utf8 encoding, yo uwill get an error related to buffer
console.log("This is the start")
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result
        writeFile('./content/result-async.txt', `the addition of the file is ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("Ending the callback thing")
        })
    })
})
console.log("ending the whole functionality")
