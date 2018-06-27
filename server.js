const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')

const config=require('./config')

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','hbs');
app.post('/view',function (req,res) {

    if(req.body.view== 'embedded'){

        res.render('embedded');
    }
    else{
        res.render('docked');
    }
})
app.use('/',express.static(path.join(__dirname,'public_static')))

app.listen(config.port,()=>{
    console.log('server has started on port 2222')
})
