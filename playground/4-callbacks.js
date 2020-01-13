const add = (n1,n2,callback) =>{

    setTimeout(()=>{
        const n3= n1+n2
        callback(n3)
    }, 2000)
}

add(1,4,(sum)=>{
console.log(sum)
})