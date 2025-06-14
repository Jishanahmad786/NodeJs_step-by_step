const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{

// conslo.log(req.url) => output /
if(req.url==='/')
{
     res.write('<h1>This is index page</h1>');
    res.end();
}
else if(req.url==='/about')
{
    fs.readFile('./public/About.html',(err,data)=>{
        if(err) throw err;
         res.write(data);
         res.end();

    });
}
else if(req.url==='/contact')
{
    fs.readFile('./public/Contact.html',(err,data)=>{
        if(err) throw err;
         res.write(data);
         res.end();

    });
}
else
{
    res.write('<h1>404 Page not found</h1>');
    res.end();
}


}).listen(3000,'localhost',()=>{
    console.log('server is running at http://localhost:3000');
})