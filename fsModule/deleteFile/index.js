const fs=require('fs');
// syn
// fs.unlinkSync('./text.txt');
// asnc
fs.unlink('text.txt',(err)=>{
    if(err) console.log(err);
    console.log("File has been deleted");
});