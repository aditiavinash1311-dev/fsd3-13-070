import { mkdir, rm } from "fs/promises";


// await mkdir("upload");
// console.log("folder created");


// await mkdir("updoad/resume");
// console.log("resume created under upload folder");

// await mkdir("images/profile/loops",{recursive: true });
// console.log("all folders created");


await rm("upload", {recursive})