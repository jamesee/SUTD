const fs = require('fs');

//============== synchronous =============
fs.mkdirSync('testfolder4');

//============== asynchronous =============
// fs.mkdir('testfolder4',function(err){
//     if (err){
//         throw(err);
//     } else {
//         console.log('directory has been created.')
//     }

// })

console.log('Likely display first');