let chai = require('chai');
const server=require('../../index.js')
const db=require('../../modeli/db.js')
const Sequelize=require('sequelize')
let assert=chai.assert;
let should=chai.should();
let chaiHttp = require('chai-http');
const { Assertion } = require('chai');
chai.use(chaiHttp);
describe('Testovi', function() {
    this.beforeAll(function (done) {
        db.sequelize.sync({ force: true }).then(function () {
            done();
        });
    })
    this.afterAll(function (done) {
        db.sequelize.sync({ force: true }).then(function () {
            done();
        });
    })
   it('POST, dodavanje studenta koji ciji index nije u bazi',function(done){
let knjiga={
ime: 'Haris',
prezime:'Harisko',
index: '183223',
grupa:'G1'
}
chai.request(server)
.post('/student')
.set('Content-type','application/json')
.send(knjiga)
.end(function(err,res){
res.should.have.status(200);
should.not.exist(err);
done();
}); 
 });

 it('POST, dodavanje studenta koji ciji index je u bazi',function(done){
    let knjiga={
    ime: 'Haris',
    prezime:'Harisko',
    index: '183223',
    grupa:'G1'
    }
    chai.request(server)
    .post('/student')
    .set('Content-type','application/json')
    .send(knjiga)
    .end(function(err,res){
    res.should.have.status(400);
    should.not.exist(err);
    done();
    }); 
     });
     it('POST, dodavanje studenta koji ciji index nije u bazi i čija grupa jos nije dodana',function(done){
        let knjiga={
        ime: 'Haris',
        prezime:'Harisko',
        index: '18703',
        grupa:'G2'
        }
        chai.request(server)
        .post('/student')
        .set('Content-type','application/json')
        .send(knjiga)
        .end(function(err,res){
            db.grupa.findAll().then((x)=>{
                x.should.have.lengthOf(2)
            })

        done();
        }); 
         });

         it('POST, dodavanje studenta koji ciji index je u bazi, provjera JSON-a',function(done){
            let knjiga={
            ime: 'Haris',
            prezime:'Harisko',
            index: '183223',
            grupa:'G1'
            }
            chai.request(server)
            .post('/student')
            .set('Content-type','application/json')
            .send(knjiga)
            .end(function(err,res){
           res.body.should.eql({status:"Student sa indexom 183223 već postoji!"});
            
            done();
            }); 
             });

             it('POST, dodavanje studenta koji ciji index nije u bazi, provjera JSON-a',function(done){
                let knjiga={
                ime: 'Haris',
                prezime:'Girško',
                index: '184523',
                grupa:'G1'
                }
                chai.request(server)
                .post('/student')
                .set('Content-type','application/json')
                .send(knjiga)
                .end(function(err,res){
               res.body.should.eql({status:"Kreiran student!"});
                
                done();
                }); 
                 });

                 it('Put, promjena grupe koje ne postoji',function(done){ 
                    let knjiga1={grupa:'G3'}
                    chai.request(server)
                .put('/student/184523')
                .set('Content-type','application/json')
                .send(knjiga1)
                .end(function(err,res){
                    res.should.have.status("200");
                res.body.should.eql({status:"Promjenjena grupa studentu 184523"});
               db.grupa.findAll().then(x=>{
                    x.should.have.lengthOf(3)
                })
                should.not.exist(err);
                done();
                }); 
                })
                it('Put, promjena grupe kod studenta kojeg nema',function(done){ 
                    let knjiga1={grupa:'G4'}
                    chai.request(server)
                .put('/student/00000')
                .set('Content-type','application/json')
                .send(knjiga1)
                .end(function(err,res){
                    res.should.have.status("400");
                res.body.should.eql({status:"Student sa indexom 00000 ne postoji"});
               db.grupa.findAll().then(x=>{
                    x.should.have.lengthOf(3)
                })
                should.not.exist(err);
                done();
                }); 
                })
                it('Batch, dodavanje studenata koji nisu u bazi',function(done){ 
                    let string="Meho,Mehic,9090,G1"
                    chai.request(server)
                    .post('/batch/student')
                    .set('Content-type','text/plain')
                    .send(string)
                    .end(function(err,res){
                        res.should.have.status("200");
                    res.body.should.eql({status:"Dodano 1 studenata!"});
                   db.grupa.findAll().then(x=>{
                        x.should.have.lengthOf(3)
                    })
                    should.not.exist(err);
                    done();
                    }); 
                })
                it('Batch, dodavanje studenata koji nisu u bazi',function(done){ 
                    var string="Meho,Mehicioni,9091,G1 \r\n F,f,8472,G1"
                    chai.request(server)
                    .post('/batch/student')
                    .set('Content-type','text/plain')
                    .send(string)
                    .end(function(err,res){
                        res.should.have.status("200");
                    res.body.should.eql({status:"Dodano 2 studenata!"});
                   db.grupa.findAll().then(x=>{
                        x.should.have.lengthOf(3)
                    })
                    should.not.exist(err);
                    done();
                    }); 
                })
                it('Batch, dodavanje studenata koji nisu u bazi i koji jesu',function(done){ 
                    var string="Meho,Mehicioni,9091,G1 \r\n F,f,8472,G1\r\n Adnan,Palavra,696969,G5"
                    chai.request(server)
                    .post('/batch/student')
                    .set('Content-type','text/plain')
                    .send(string)
                    .end(function(err,res){
                        res.should.have.status("200");
                    res.body.should.eql({status:"Dodano 1 studenata, a studenti 9091,8472 već postoje!"});
                   db.grupa.findAll().then(x=>{
                        x.should.have.lengthOf(4)
                    })
                    should.not.exist(err);
                    done();
                    }); 
                })
                 it('Batch, dodavanje studenata koji nisu u bazi i koji jesu, i pored toga imamo prazne linije u csvu',function(done){ 
                    var string="Meho,Mehicioni,9091,G1 \r\n F,f,8472,G1\r\n\r\n Adnan,Pasa,6939,G1"
                    chai.request(server)
                    .post('/batch/student')
                    .set('Content-type','text/plain')
                    .send(string)
                    .end(function(err,res){
                        res.should.have.status("200");
                    res.body.should.eql({status:"Dodano 1 studenata, a studenti 9091,8472 već postoje!"});
                   db.grupa.findAll().then(x=>{
                        x.should.have.lengthOf(4)
                    })
                    should.not.exist(err);
                    done();
                    }); 
                })
         
})
 
