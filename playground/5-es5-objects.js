const product={
    name:'mobile',
    weight:'25gm'
}

console.log(product)

const {name:MName, weight, model='MI'} = product
console.log(MName)
console.log(weight)
console.log(model)

const transaction = (type,{name,weight}) =>{
    console.log(type+' , '+name+' , '+weight)
}
transaction('order',product)