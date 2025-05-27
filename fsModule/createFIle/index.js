const fs= require('fs')
// it is a syncronous call and ./ current directry 
// fs.writeFileSync('./test.txt','Hello')

// it is a asyncrounous call
fs.writeFile('./test.txt',"Hello world",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("File Has been written Succefully");
    }
});
