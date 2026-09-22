const products=[
    {
        id:1,
        name:'marker',
        qty:100,
        price:15
    },
    {   
        id:2,
        name:'duster',
        qty:200,
        price:10
    },
]
let nextId = 3;
export const getAllProducts = () =>{
    return products;
}

export const addAllProducts = (item) =>{
    item.id =  nextId;
    nextId++;
    products.push(item);
    return item;
};

export const deleteproducts = (pid) =>{
    const item = products.findIndex((prd)=> prd.id === pid);
    if (item == -1)
        return false;
    products.splice(item,1)
    console.log("products remaining: ",products);
    return true;
};