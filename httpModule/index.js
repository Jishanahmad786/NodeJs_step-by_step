const http=require('http');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.write('Response From Servers..');
    res.end();

});
server.listen(3000,'localhost',()=>{
    console.log(`server running at http://localhost:3000`);
})