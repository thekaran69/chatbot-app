 var express= require('express')
 var ejs= require('ejs')

 var app = express();

app.listen(8887,()=>{
   console.log('server started')
});

app.use(express.static('public'));
app.set('view engine','ejs');

 app.get('/',function(req,res){
    res.render('pages/index');

 });

