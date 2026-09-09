localhost - URL
127.0.0.1 -IP address

ctrl+c - stop the server

every request from client has a pair of {request,response}



NPM fullform : Node package manager


## Node Package Manager (NPM)

used to install, run, uninstall any program/project and package

- npm install <packagename>
- npm uninstall <packagename>

to use npm, the project must be npm project,
to create npm project we can use

- npm init -y
- it creates a package.json file automatically
  package.json holds all the information related to install
  packages from npm
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modules by .gitignore


Nodemon - it restart the server automatically when file changes, to install

> npm i nodemon -D

Note: -D flag will install this package as developer dependency

- to excute any program, update the package.json file then start the server as
<b>npm run dev</b>
- start -> it will excute the app on development
- dev -> it will start server in development phase (only for developer)

- res : it will return contents (json/ html/ plan) to the server
- server send also statusCodes to the client, that indicates the error/ success message

## status codes

- 200 -> Ok
- 201 -> Created
- 400 -> bad request
- 401 -> Unauthorized
- 403 -> forbidden
- 404 -> not found
- 500 -> internal server error

## content type

- text/plain
- text/html
- application/json
- text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode

RESPONSE AS HTML CONTENT
1. response.end
end("any html content")


2. html file
- read by create read stream
- file with res


## SEND HTML FILE TO CLIENT
1. html file 
  - read html file using createReadStream
  - pipe it with res object

2. html content 
send any html tags/content by using 
res.end('<any html tag>')


## JSON
server returns data only not html contents beacause html content will be writen by frontend devloper.
The data is in Json format
- json always stores data in key, value pair enclosed by curly brackets { }
- array can be stored by square brackets [ ]
- one pair of curly bracket will represent only one object and its property will be separated by ","


```
{
  id:1,
  Name: "Mobile",
  price: 250000,
  rating: 4.5,
  review: 123
}
```