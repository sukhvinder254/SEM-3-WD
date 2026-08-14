const os=require('os');
console.log(os.platform())
console.log(os.arch())
console.log(os.cpus().length)
console.log(os.homedir())
console.log(os.totalmem()/(1024*1024*1024) + " GB");
console.log(os.freemem()/(1024*1024) + " MB");

const filePath=path.resolve(__dirname, "core_modules.js");
// to create path use path.resolve and path.join (path.join bs chunks )
const filePath=path.join("lecture 5", "Core-D", "core_modules.js");
console.log(filePath);
const file="lecture 5/Core-D/core_modules.js"
console.log(path.basename(file));
console.log(path.extname(file));
console.log(path.dirname(file));
// read file method asyn mein use hota hai

console.log("first")
const data = fs.readFileSync("file.txt", "utf-8"); //synchronous
console.log(data);
console.log("second")
console.log("first")
fs.readFile("file.txt", "utf-8", (err,data)=>{ //asynchronous
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
console.log("second") 


fs.appendFile("file.txt", "\nhello students" ,(err)=>{
    if(err){
        console.log(err);
    }

})
fs.unlink("file.txt",(err)=>{
    if(err){
        console.log(err);
    }
})

const password="Jhong124"

// const hash=crypto.createHash("sha256").update(password).digest("hex");
// console.log(hash)

const salt=crypto.randomBytes(16).toString("hex");
// console.log(salt)

const hash=crypto.createHmac("sha256",salt).update(password).digest("hex");
console.log(hash)

dns.lookup("www.google.com",(err,address,family)=>{
    if(err)
})
