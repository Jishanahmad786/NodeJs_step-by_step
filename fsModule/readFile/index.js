const fs=require('fs');
// synchronous
//const result=fs.readFileSync('./text.txt','utf-8')
// console.log(result);
const result=fs.readFile('text.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
    }
})