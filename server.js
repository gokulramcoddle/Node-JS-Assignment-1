const http = require('http')
const PORT = 2002
const fs = require('fs').promises
const path = require('path')

const fileHandle = async()=>{
    try{
       const data = await fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8');
       console.log(`Read successfully : ${data}`);

       await fs.writeFile(path.join(__dirname, 'text.txt'), 'Hello Everyone' );
       console.log("Writtern successfully");
    }
    catch(error){
         console.error("Error : ",error.message);
    }
}

const server = http.createServer((req,res) => {
   res.writeHead(200, {'content-type':'text/html'})
   const method = req.method;
   
   if(req.url === '/about' && method === 'GET'){
    res.write("You are in about page");
    return res.end();
}
    
   res.write("You are in home page");
   res.end();

})

server.listen(PORT, (error)=>{
    if(error) console.log(error)
    else console.log("successfully running");
    fileHandle();
    
})
