const os=require('os');

//infor about the current user
const user=os.userInfo();
console.log(user);

//method to return the system upTime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);