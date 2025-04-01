const http = require('http')
const PORT = 2002
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res) => {
   res.writeHead(200, {'content-type':'text/html'})
   const method = req.method;
   
   if(req.url === '/about' && method === 'GET'){
    fs.readFile('about.html',(error,data)=>{
        if(error){
           res.writeHead(400);
          res.write("error");
        }
        else{
            res.write(data)
            return res.end();
        }
   })
   }
   fs.readFile('index.html', (error,data)=>{
    if(error){
       res.writeHead(400);
       res.write('page not found');
    }
    else{
        res.write(data)
    }
    res.end();
   })

})

server.listen(PORT, (error)=>{
    if(error) console.log(error)
    else console.log("successfully running")
})
