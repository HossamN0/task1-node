const data = require("./data")
const yargs = require("yargs")

yargs.command({
    command:"add",
    describe:"You can add an item",
    builder:{
        id:{
            describe:"your id",
            demandOption: true,
            type:"number"
        },
        fname:{
            describe:"your name",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"your age",
            demandOption:true,
            type:"number"
        },
        city:{
            describe:"your city",
            demandOption:false,
            type:"string"
        }
    },
    handler:(x)=>{
        data.addthis(x.id, x.fname, x.age, x.city)
    }
    
})


yargs.command({
    command:"delete",
    describe:"You can delete an item",
    builder:{
        id:{
            describe:"your id",
            demandOption: true,
            type:"number"
        }
    },
    handler:(x)=>{
        data.deletethis(x.id)
    }
})

yargs.command({
    command:"read",
    describe:"You can read an item",
    builder:{
        id:{
            describe:"your id",
            demandOption: true,
            type:"number"
        }
    },
    handler:(x)=>{
        data.readthis(x.id)
    }
})


yargs.command({
    command:"list",
    describe:"You can read all items",
    handler:()=>{
        data.readAll()
    }
})


yargs.parse()