const fs=require('fs')
const append=()=>{
const data=" i am appended data"
fs.appendFile('./data.txt',data,(err)=>
{
    if(err)
        console.log(err)
    else
    console.log("data appended")
})
}

append()