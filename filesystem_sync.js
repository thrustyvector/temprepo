//readFileSync and writeFileSync are the methods taht we are going to use for now
const {readFileSync,writeFileSync}=require('fs')
const fs=require('fs')
//will be reading thingd from the different file system


//now reading from the filesystem
//first parametr i sthe filepath and second paramter is the encodign system
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')
console.log(first,second)


//we passthe file name and th evalues of the file that we want to put
//if the file isnt there thenode creates ine and add the values we want to
writeFileSync('./content/result-sync.txt',`Here is the result ${first} ${second}`)

//to append values into the text file
writeFileSync('./content/result-sync.txt',`Here is the result ${first} ${second}`, {flag:'a'})