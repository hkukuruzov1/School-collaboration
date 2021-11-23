let TestoviParser = (function () {
    const dajTacnost = function (x) {
        let myObj;
        try{
          JSON.parse(x);
        }
        catch(e){
            return JSON.parse('{"tacnost":"0%","greske":["Testovi se ne mogu izvršiti"]}');
        }
        myObj =JSON.parse(x);
        let statistika=myObj.stats;
        let uspjesni=statistika.passes;
        let pali=statistika.failures;
        if((uspjesni/(uspjesni+pali))*100<100){
            let testovi=myObj.failures;
            let longstring= '{"tacnost":"'+Math.round((uspjesni/(uspjesni+pali))*100*10)/10+'%","greske":';
            longstring=longstring+'[';
            for(let i=0;i<pali;i++){
                longstring+='"';
                longstring=longstring+testovi[i].fullTitle;
                longstring+='"';
                if(i!=pali-1)
                longstring+=", ";
            }
            longstring=longstring+']';
            longstring+='}';
            return JSON.parse(longstring);
        }
        else{
            const myJson='{"tacnost":"100%","greske":[]}';
            return JSON.parse(myJson);
        }
    }
    return {
        dajTacnost:dajTacnost
    }
 }());
 //Tabela.crtaj(3,3)
 //i=0 ⍉⍉⍉
 //i=1 ⎕⍉⍉
 //i=2 ⎕⎕⍉ 
 //Tabela.crtaj(8, 8);