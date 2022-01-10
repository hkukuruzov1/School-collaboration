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
  
  
