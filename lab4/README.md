# Express

1. create project folder
2. goto project and open terminal
3. execute `npm init -y`
4. install `npm i nodemon -D`
   install `npm i express`
5. open package.json 
   a. change `type: 'module'`
   B. update script {
    "script":"node prg1
   }
6. create prg1.js in folder
7. add folderName/node_modules in .gitignore



# send functon
- send functon is used to revert back content to the clients it may be html, JSON, html file, plain text
- we can also add status code with status function it can be changed with send 

# Map
- this function is used to itrate any array it must return new array

```
array.map((item)=>{
   return
})
array.map((item)=>())
```

- In first syntax we have to use explicit return keyword whereas in syntax 2 not required
- exclude number of property from any json obj

```
const {p1,p2,...rest}= product;
log (rest);
```

# Search 
- to search any item in JSON array we use find method it will return NULL on UNSUCCESSFUL and obj on successful.

```
array.find((item)=>item.id===id);
```