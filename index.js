const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('public/html'));

app.get('/vjezbe', function (req, res) {
    var data=fs.readFileSync('vjezbe.csv','utf8');
    let data1=data.split(" ");
    data= data1[1].split(",").map(Number);
    let stringeroni='{"brojVjezbi":'+data1[0]+',"brojZadataka":[';
    for(let i=0;i<data.length;i++){
        if(i!=data.length-1)
        stringeroni+=data[i]+','
        else
    stringeroni+=data[i];
    }
    stringeroni+=']}';
    res.status(200).json(JSON.parse(stringeroni));
  })

  app.post('/vjezbe', function (req, res) {
    var br=req.body.brojVjezbi;
    var niz=req.body.brojZadataka;
    var trebali=0;
    var stringeroni='{"status":"error","data":"Pogrešan parametar ';
    if(br<1 || br>15){
        stringeroni+='brojVjezbi';
        trebali++;
    }
    let greske=0;
    for(let i=0;i<niz.length;i++){
            if(niz[i]<0 || niz[i]>10){
            greske++;
            trebali++;
            }
    }
    let brojac=0;
    if(greske!=0 && (br<1 || br>15))
    stringeroni+=','
    for(let i=0;i<niz.length;i++){
        if((niz[i]<0 || niz[i]>10) && brojac!=greske-1){
            stringeroni+='z'+i+',';
            brojac++;
        }
        else if((niz[i]<0 || niz[i]>10)){
            stringeroni+='z'+i;
            brojac++;
        }
}
if(br!=niz.length && trebali!=0)
stringeroni+=',brojZadataka';
else if(br!=niz.length){
stringeroni+='brojZadataka';
trebali++;
}
if(trebali!=0)
stringeroni+='"}';
console.log(stringeroni)
if(trebali==0)
res.status(200).json({"brojVjezbi":br, "brojZadataka":niz});
else
res.status(400).json(JSON.parse(stringeroni));
  })

app.listen(3000, () => console.log(`Server listening on port:3000`));