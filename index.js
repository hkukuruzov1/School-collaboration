const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
var path = require('path');
const exp = require('constants');
const { QueryTypes, where } = require('sequelize');
const db = require('./modeli/db.js');
const { use } = require('chai');


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('public/html'));
/*app.use(express.static('node_modules/sinon/pkg'));
app.use(express.static('node_modules/chai'))
app.use(express.static('node_modules/mocha'))*/

app.get('/vjezbe', function (req, res) {
    let stringeroni = "";
    let duzina;
    let nizVjezbi=[];
    let nizZadataka=[];
    let histogram=[];
    db.sequelize.query("SELECT * FROM `vjezbas`", { type: QueryTypes.SELECT }).then((users) => {
        stringeroni += '{"brojVjezbi":' + users.length + ',"brojZadataka":[';
        duzina=users.length;
        nizVjezbi=users;
        for(let i=0;i<duzina;i++)
        histogram.push(0);
     

    }).then(()=>{})
    db.sequelize.query("SELECT * FROM `zadataks`", { type: QueryTypes.SELECT }).then((vjezbe)=>{
        nizZadataka=vjezbe;
        
       }).then(()=>{
           for(let i=0;i<nizVjezbi.length;i++){
               for(let j=0;j<nizZadataka.length;j++){
                   
                   if(nizVjezbi[i].id==nizZadataka[j].vjezbaId){
                        histogram[i]++;
                   }
               }
           }
       })
       .then(()=>{
        
        for(let i=0;i<histogram.length;i++){
            if(i!=histogram.length-1)
            stringeroni+=histogram[i]+","
            else
            stringeroni+=histogram[i];
        }
        res.status(200).json(JSON.parse(stringeroni+"]}"))
    }
)
    })

    app.post('/vjezbe',function(req,res){
        let nizVjezbePromise = [];
        let nizZadaciPromise = [];
        var provjera = false;
        var brojVjezbi = req.body['brojVjezbi'];
        if(brojVjezbi < 1 || brojVjezbi > 15) {
            provjera = true;
            error.data += 'brojVjezbi,';
        }
        let greske="";
        for (var i = 0; i < req.body['brojZadataka'].length; i++) {
            if(req.body['brojZadataka'][i] < 0 || req.body['brojZadataka'][i] >10) {
                provjera = true;
                greske += "z"+i+",";
            }
        }
        let stringerona="Pogrešan parametar "+greske.substring(0,greske.length-1);
    
        if(provjera){
            res.json({
                'status' : 'error',
                'data' : stringerona
            });
        }else{
            var linija = req.body['brojVjezbi'] + ' ' +req.body['brojZadataka'];
            db.zadatak.destroy({where: {}}).then(()=>{
                db.vjezba.destroy({where: {}}).then(()=>{
                    for (let i = 0 ; i < brojVjezbi; i++) {
                        nizVjezbePromise.push(db.vjezba.create({naziv:'Vjezba'}));
                    }
    
                    for (let i = 0; i < req.body['brojZadataka'].length; i++) {
                        for (var j = 0; j < req.body['brojZadataka'][i]; j++) {
                            nizZadaciPromise.push(db.zadatak.create({naziv:"Zadatak", vjezbaId:(i+1).toString()}));
                        }
                    }
                }).then(()=>{
                    Promise.all(nizVjezbePromise);
                    Promise.all(nizZadaciPromise);
                    res.json(req.body);
                })
            })
        }
    });

app.post('/student', function (req, res) {
    let indexoni=req.body.index;
    let grupica=req.body.grupa;
    let imez=req.body.ime;
    let prez=req.body.prezime;
    var provjera=true;
    db.student.findOne({where:{index:indexoni}}).then((x)=>{
        if(x!=null){
            let stringerica="Student sa indexom "+indexoni+" već postoji!";
            provjera=false;
            res.status(400).json({"status":stringerica});
        }
    }).then(()=>{
        if(provjera){
        db.grupa.findOne({where:{naziv:grupica}}).then((x)=>{
            if(x==null){
                db.grupa.create({naziv:grupica}).then(()=>{
                  
                });
            }
            db.student.create({ime:imez, prezime:prez, index:indexoni, grupa:grupica}).then(()=>{
                res.status(200).json({"status":"Kreiran student!"});
            });
        })
}})
})
app.put('/student/:index', function (req, res) {
    var indexica=req.params.index;
    var provjera=true;
    db.student.findOne({where:{index:indexica}}).then((x)=>{
        if(x==null){
            let stringerica="Student sa indexom "+indexica+" ne postoji!";
            provjera=false;
            res.status(400).json({"status":stringerica});
        }
    }).then(()=>{
        if(provjera){
            db.grupa.findOne({where:{naziv:req.body.grupa}}).then((x)=>{
                if(x!=null){
                    db.student.update({grupa:req.body.grupa},{where: {index:indexica}}).then(()=>{
                        res.status(200).json({"status":"Promjenjena grupa studentu "+indexica});
                    })
                }
                else{
                    db.grupa.create({naziv:req.body.grupa}).then(()=>{
                        db.student.update({grupa:req.body.grupa},{where: {index:indexica}}).then(()=>{
                            res.status(200).json({"status":"Promjenjena grupa studentu "+indexica});
                        })
                    });
                }
            })
        }
    })
})
app.post('/batch/student', function (req, res) {
    
 let poNovomRedu=req.body.split("\r\n");

 let nizStudenata=[];
 let studentiPromise=[];
 let tuSu=[];
 let n=0;
 poNovomRedu.forEach(x => {
     if(x!=""){
    let argsStudenta = x.split(',');
    studentiPromise.push(db.student.findOne({where: {index:argsStudenta[2]}}))
    nizStudenata.push(x);
     }
});
Promise.all(studentiPromise).then(function(studenti) {
    let studenteZaDodati = []
    for (var i =  0; i < nizStudenata.length; i++) {
        let data = nizStudenata[i].split(',')
        if(studenti[i] == null) {
            studenteZaDodati.push(db.student.create({ime: data[0], prezime: data[1], index:data[2], grupa:data[3]}))
            n++;
        }
        else
            tuSu.push(data[2])
    }
    Promise.all(studenteZaDodati).then(function(s){
        let grupePromise = []
        s.forEach(st => {
            grupePromise.push(db.grupa.findOrCreate({where: {naziv: st.grupa}}))
        })
        Promise.all(grupePromise).then(function(){
            if(tuSu.length > 0) {
            res.json({ status: "Dodano "+n+" studenata, a studenti "+tuSu.join(',')+" već postoje"})
            }
            else
             res.json({status: "Dodano " + n+ " studenata!"})
        }
        )
    })
})


})
app.listen(3000, () => console.log(`Server listening on port:3000`));