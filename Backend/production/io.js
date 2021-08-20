const process = require('process');

console.log(process.argv);



process.stdin.on('data',(keyboard)=>{
    process.stdout.write(`${keyboard}`);
    process.exit();

})

