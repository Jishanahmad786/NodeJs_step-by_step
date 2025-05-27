const fs=require('fs');
// syn
//fs.appendFileSync('./text.txt','Good Morning');
fs.appendFile('./text.txt','How are you',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Data appended succefully");
    }
});
