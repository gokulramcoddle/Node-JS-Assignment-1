const fspromises = require('fs').promises;
const path=require('path');

const fileOpen= async () => {
try{
const data = await fspromises.readFile(path.join(__dirname, 'text.txt'), 'utf8');
console.log("read successfully : ", data)

await fspromises.writeFile(path.join(__dirname, 'new.html'), '<h3>hello</h3>');
console.log("writtern successfully")

}catch(error){
  console.error(error);
}
}

fileOpen();