const db=require('./db.js');
db.sequelize.sync({force:true}).then(function(){
    fillUp();
});
function fillUp(){
  var studentiListaPromisea=[];
  var VjezbaListaPromiesa=[];
  var ZadaciListaPromiesa=[];
  return new Promise(function(resolve,reject){
    studentiListaPromisea.push(db.student.create({ime:'Haris',prezime:'Kukuruzović',index:'18703',grupa:'G1'}));
    studentiListaPromisea.push(db.student.create({ime:'Hamza',prezime:'Kukuruzović',index:'18743',grupa:'G1'}));
    VjezbaListaPromiesa.push(db.vjezba.create({naziv:'z0'}));
    VjezbaListaPromiesa.push(db.vjezba.create({naziv:'z1'}));
    VjezbaListaPromiesa.push(db.vjezba.create({naziv:'z2'}));
    Promise.all(VjezbaListaPromiesa).then(function(knjige){
      var pavlija=knjige.filter(function(k){return k.naziv==='z0'})[0];
      ZadaciListaPromiesa.push(
        db.zadatak.create({naziv:'Zadatak1'}).then(function(b){
          console.log(b);
            return pavlija.setVjezbaId(b).then(function(){
            return new Promise(function(resolve,reject){resolve(b);});
            });
        })
    );
    ZadaciListaPromiesa.push(
      db.zadatak.create({naziv:'Zadatak2'}).then(function(b){
        console.log(b);
          return pavlija.setVjezbaId(b).then(function(){
          return new Promise(function(resolve,reject){resolve(b);});
          });
      })
  );
  
    });
  });
}
