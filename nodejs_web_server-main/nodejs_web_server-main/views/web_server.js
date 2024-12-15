const express = require ('express')
const app = express()
const path = require ('path')
const PORT = process.env.PORT || 3500


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/old-page(.html)?',(req,res) => {
    res.redirect(301,('old.html'))
})

app.listen(PORT , () => console.log(`server running in port ${PORT}`))
