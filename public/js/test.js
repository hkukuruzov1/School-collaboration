 let assert=chai.assert;
 let should=chai.should();
describe('GET', function() {
  beforeEach(function() {
    this.xhr = sinon.useFakeXMLHttpRequest();
 
    this.requests = [];
    this.xhr.onCreate = function(xhr) {
      this.requests.push(xhr);
    }.bind(this);
  });
 
  afterEach(function() {
    this.xhr.restore();
  });
 
  it('Test za request', function(done) {
            VjezbeAjax.dohvatiPodatke(function(err, data) {
                assert.equal(err, null, 'Podaci su ispravni!');
               assert.deepEqual(JSON.parse(data), { "brojVjezbi": 5, "brojZadataka": [4,3,2,1,10] });
                done();
            });
            this.requests[0].respond(200, { 'Content-Type': 'text/json' }, '{"brojVjezbi":5, "brojZadataka":[4,3,2,1,10]}');
        });

        
});
describe('POST', function() {
    beforeEach(function() {
      this.xhr = sinon.useFakeXMLHttpRequest();
   
      this.requests = [];
      this.xhr.onCreate = function(xhr) {
        this.requests.push(xhr);
      }.bind(this);
    });
   
    afterEach(function() {
      this.xhr.restore();
    });
   
    it('Test ispravnih podataka', function() {
      let jsonica = {"brojVjezbi": 2, "brojZadataka": [1,1]};
      let dataJson = JSON.stringify(jsonica);
              VjezbeAjax.posaljiPodatke(jsonica,function(err, data) {
                  assert.equal(err, null, 'Podaci su ispravni!');
                  assert.deepEqual(data, { "brojVjezbi": 2, "brojZadataka": [1, 1] });
                  done();
              });
              this.requests[0].requestBody.should.equal(dataJson);
          });
  });
describe('Provjera id input polja', function() {
    beforeEach(function() {
      this.xhr = sinon.useFakeXMLHttpRequest();
   
      this.requests = [];
      this.xhr.onCreate = function(xhr) {
        this.requests.push(xhr);
      }.bind(this);
    });
   
    afterEach(function() {
      this.xhr.restore();
    });
   
    it('Provjera koji id imaju dodana input polja', function() {
              var pomocniDiv = document.getElementById('zadaci');
              pomocniDiv.innerHTML = '';
              VjezbeAjax.dodajInputPolja(pomocniDiv, 3);
                let br=0;
              for (let i = 2; i < pomocniDiv.children.length; i += 4) {
                  let id = 'z' + br;
                  assert.equal(pomocniDiv.children[i].id === id, true, 'Id nisu ok, provjerite djecu!');
              br++;
              
                }
             
          });
          it('Provjera koji id imaju dodana input polja 2', function() {
            var pomocniDiv = document.getElementById('zadaci');
            pomocniDiv.innerHTML = '';
            VjezbeAjax.dodajInputPolja(pomocniDiv, 10);
              let br=0;
            for (let i = 2; i < pomocniDiv.children.length; i += 4) {
                let id = 'z' + br;
                assert.equal(pomocniDiv.children[i].id === id, true, 'Id nisu ok, provjerite djecu!');
            br++;
           
              }
           
        });
        
  });
  describe('Provjera vjezbe.html', function() {
    beforeEach(function() {
      this.xhr = sinon.useFakeXMLHttpRequest();
   
      this.requests = [];
      this.xhr.onCreate = function(xhr) {
        this.requests.push(xhr);
      }.bind(this);
    });
   
    afterEach(function() {
      this.xhr.restore();

    });
   
    it('Provjera koji id imaju dodana input polja', function() {
              var pomocniDiv = document.getElementById('vizbe');
              VjezbeAjax.iscrtajVjezbe(pomocniDiv, { "brojVjezbi": 5, "brojZadataka": [4,3,2,1,10] });
                let br=1;
              for (let i = 0; i < pomocniDiv.children.length; i += 2) {
                  let id = 'v' + br;
                  assert.equal(pomocniDiv.children[i].id === id, true, 'Id nisu ok, provjerite djecu!');
              br++;
              
                }
             
          });
          it('Provjera koji id imaju dodana input polja2', function() {
            var pomocniDiv = document.getElementById('vizbe1');
            VjezbeAjax.iscrtajVjezbe(pomocniDiv, { "brojVjezbi": 5, "brojZadataka": [4,3,2,1,10] });
              let br=1;
            for (let i = 0; i < pomocniDiv.children.length; i += 2) {
                let id = 'v' + br;
                assert.equal(pomocniDiv.children[i].id === id, true, 'Id nisu ok, provjerite djecu!');
            br++;
            
              }
           
        });
    
  });
  
  
