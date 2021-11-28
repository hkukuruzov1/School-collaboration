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
    const porediRezultate=function(rezultat1,rezultat2){
        let obj1;
        let obj2;
        try{
         obj1=JSON.parse(rezultat1);
        obj2=JSON.parse(rezultat2);
        }
        catch(e){
            return JSON.parse('{"promjena":"0%","greske":["Testovi se ne mogu izvršiti"]}');
        }
        let brTest1=obj1.stats.tests;
        let brTest2=obj2.stats.tests;
        let testovi1=obj1.tests;
        let testovi2=obj2.tests;
        if(brTest1==brTest2){
            let br=0;
            for(let i=0;i<brTest1;i++){
                for(let j=0;j<brTest2;j++){
                    if(testovi1[i].fullTitle.localeCompare(testovi2[j].fullTitle))
                    br++;
                }
            }
            if(br==brTest2){
                let f=dajTacnost(rezultat2).tacnost;
                testovi2.sort(function(a,b){return a.fullTitle.localeCompare(b.fullTitle);});
                let longstring='{"promjena":"'+f+'","greske":[';
                for(let i=0;i<obj2.stats.failures;i++){
                    longstring+='"';
                    longstring+=obj2.failures[i].fullTitle;
                    longstring+='"';
                    if(i!=obj2.stats.failures-1)
                    longstring+=',';
                }
                longstring+=']}';
                return JSON.parse(longstring);
            }
        }
            
                let s=obj1.failures;
                let hlp=0;
                const trazeniNiz=[];
                let index=0;
                for(let i=0; i<obj1.stats.failures;i++){
                    hlp=0;
                    for(let j=0;j<brTest2;j++){
                            if((s[i].fullTitle.localeCompare(testovi2[j].fullTitle))==0){
                            hlp++;
                            }
                            if(j==brTest2-1 && hlp==0){
                                trazeniNiz[index]=s[i];
                                index++;
                            }
                    }
                }
                if(brTest2==0){
                    for(let i=0; i<obj1.stats.failures;i++){
                        trazeniNiz[index]=s[i];
                                index++;
                    }
                }
                let x=(trazeniNiz.length+obj2.stats.failures)/(trazeniNiz.length+brTest2)*100;
                trazeniNiz.sort(function(a,b){return a.fullTitle.localeCompare(b.fullTitle);});
                let drugiNiz=obj2.failures;
                drugiNiz.sort(function(a,b){return a.fullTitle.localeCompare(b.fullTitle);});
                let longstring='{"promjena":"'+Math.round(x*10)/10+'%","greske":[';
                for(let i=0;i<trazeniNiz.length;i++){
                    longstring+='"';
                    longstring+=trazeniNiz[i].fullTitle;
                    longstring+='"';
                    if(i!=trazeniNiz.length-1)
                    longstring+=',';
                }
                if(obj2.failures.length>0 && trazeniNiz.length>0)
                longstring+=',';
                for(let i=0;i<obj2.failures.length;i++){
                    longstring+='"';
                    longstring+=drugiNiz[i].fullTitle;
                    longstring+='"';
                    if(i!=obj2.failures.length-1)
                    longstring+=',';
                }
                longstring+=']}';
                return JSON.parse(longstring);
            

        }
    return {
        dajTacnost:dajTacnost,
        porediRezultate:porediRezultate
    }
 }());
 //Tabela.crtaj(3,3)
 //i=0 ⍉⍉⍉
 //i=1 ⎕⍉⍉
 //i=2 ⎕⎕⍉ 
 //Tabela.crtaj(8, 8);