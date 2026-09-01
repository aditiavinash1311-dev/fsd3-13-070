import{EventEmitter}from 'node:events';
const task = new EventEmitter();
const sayhello =(name)=>{
    console.log(`welcome to ${name}`);
};
const starts =() =>{
    console.log("system started");
    
};


task.on("greet",starts);

task.on("greet",sayhello);
task.emit("greet","Aditi");

task.emit("greet","Anushka");
