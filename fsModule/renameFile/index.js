const fs=require('fs');
//sync
// fs.renameSync('./text.txt','./data.txt')
// ascy
fs.rename('./text.txt','./data.txt',(err)=>{
    if(err) console.log(err);
    console.log("File has been rename");
});
