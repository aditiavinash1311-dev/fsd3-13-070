import http from 'http'

const server = https.createServer((req,res)=>{
  // req method -> GET, POST, PUT, DELETE, PATCH
    console.log("method: ", req.method);
    console.log(" URL", req.url);

    // BROWSER CAN SEND ONLY GET REQUEST TO THE SERVER
    // POST/PUT/PATCH/DELETE -> CAN BE CHECKED BY API TESTER
    // API TESTER :- POSTMAN, ECHO API, THUNDER CLIENT
});