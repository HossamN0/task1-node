const fs = require("fs")


const addthis = (id, fname, age, city)=>{
    const allData = loadData()

    const duplicated = allData.filter((x)=> {return x.id == id})
    if(duplicated == 0){
        allData.push({
            id: id,
            fname: fname,
            age: age,
            city: city
        })
    }else {
        console.log("pls change id")
    }

    saveData(allData)
}

const loadData = ()=>{
    try{
        const jsonData = fs.readFileSync("savedata.json").toString()
        
        return JSON.parse(jsonData)
    }
    catch{
        return []
    }
}

const saveData = (x)=>{
    const jsonData = JSON.stringify(x)

    fs.writeFileSync("savedata.json",jsonData)
}

const deletethis = (id)=>{
    const allData = loadData()

    const keepData = allData.filter((x)=>{ return x.id !== id})

    saveData(keepData)
}

const readthis = (id)=>{
    const allData = loadData()

    const thisdata = allData.find((x)=>{return x.id == id})
    if(thisdata){
        console.log(thisdata)
    }else{
        console.log("not found")
    }
}

const readAll = ()=>{
    const allData = loadData()

    allData.forEach((x)=>{console.log(x.fname, x.age)})
}
module.exports = {
    addthis,
    deletethis,
    readthis,
    readAll
}