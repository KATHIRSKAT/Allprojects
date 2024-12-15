const fs = require('fs')

fs.mkdir('./new' , (err) =>{
    if(err) throw err
    console.log('directory is created')
})

process.on('uncaughtException' , err =>{
    console.error('there is an error occured ${err}')
    process.exit(1)
})