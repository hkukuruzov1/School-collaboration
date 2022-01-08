let VjezbeAjax=(function(){
const dodajInputPolja=function(DOMelementDIVauFormi,brojVjezbi){
    DOMelementDIVauFormi.innerHTML = "";
for(let i=0;i<brojVjezbi;i++){
    var para = document.createElement("label");                       
var t = document.createTextNode("z"+i);      
para.appendChild(t);     
var x = document.createElement("INPUT");
x.setAttribute("type", "number");       
x.setAttribute("value", "4");    
x.setAttribute("id", "z"+i);   
x.setAttribute("name","z"+i)    ;                   
DOMelementDIVauFormi.appendChild(para); 
DOMelementDIVauFormi.appendChild(document.createElement("br"));
DOMelementDIVauFormi.appendChild(x);
DOMelementDIVauFormi.appendChild(document.createElement("br"));
}
}
const posaljiPodatke=function(vjezbeObjekat,callbackFja){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200){
            
            callbackFja(null,ajax.responseText);
        }
        if (ajax.readyState == 4 && ajax.status == 400)
            callbackFja(ajax.statusText,null);
    }
    ajax.open("POST","http://localhost:3000/vjezbe",true);
    ajax.setRequestHeader('Content-type', 'application/json');
    ajax.send(JSON.stringify(vjezbeObjekat));
}
const dohvatiPodatke=function(callbackFja){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {// Anonimna funkcija
        if (ajax.readyState == 4 && ajax.status == 200){
            
            callbackFja(null,ajax.responseText);
        }
        if (ajax.readyState == 4 && ajax.status == 400)
            callbackFja(ajax.statusText,null);
    }
    ajax.open("GET", "http://localhost:3000/vjezbe", true);
    ajax.send();
}
const iscrtajVjezbe=function(divDOMelement,objekat){
for(let i=1;i<=objekat.brojVjezbi;i++){
    let x=document.createElement("button")
    x.setAttribute("id","v"+i);
    x.appendChild(document.createTextNode("VJEŽBA "+i+" "))
    x.setAttribute("value",objekat.brojZadataka[i-1])
    x.setAttribute("class","dugme")
    var f=document.getElementById("v"+i)
    divDOMelement.appendChild(x);
    divDOMelement.appendChild(document.createElement("br"))
    x.onclick=function(){
        iscrtajZadatke(x,x.value)
    }
}
}
const iscrtajZadatke=function(vjezbaDOMelement,brojZadataka){
    let kontejner=vjezbaDOMelement.parentNode
    for(let i=1;i<kontejner.childElementCount;i+=2) {
        console.log(kontejner.childNodes[i])
            if(!(kontejner.childNodes[i]).isSameNode(vjezbaDOMelement)){
                
            if (kontejner.childNodes[i].childElementCount>0) 
            {
                if(!((kontejner.childNodes[i].childNodes)[1].style.display == "none")){
                for(let j=0;j<kontejner.childNodes[i].childElementCount;j++){
                    (kontejner.childNodes[i].childNodes)[j+1].style.display = "none";
                    }
                
            }
        }
        }
        
    }
    let br=0;
    for(let i=0;i<vjezbaDOMelement.childElementCount;i++){
        if((vjezbaDOMelement.childNodes)[i+1].style.display == "none"){
        br++;
        }
        }
    if(vjezbaDOMelement.childElementCount>=1 && br==0){
        for(let i=0;i<vjezbaDOMelement.childElementCount;i++){
        (vjezbaDOMelement.childNodes)[i+1].style.display = "none";
        }
        return
    }
    if(br!=0){
        for(let i=0;i<vjezbaDOMelement.childElementCount;i++){
            (vjezbaDOMelement.childNodes)[i+1].style.display = "inline-block";
            }
            return
    }
    for(let i=0;i<vjezbaDOMelement.value;i++){
        let x=document.createElement("button")
        x.appendChild(document.createTextNode("ZADATAK "+(i)))
    /*vjezbaDOMelement.parentNode.insertBefore(x, vjezbaDOMelement.nextSibling);*/
    /*x.style.display="inline-block"*/
        vjezbaDOMelement.appendChild(x)
    }
}
return{
    dodajInputPolja:dodajInputPolja,
    posaljiPodatke:posaljiPodatke,
    dohvatiPodatke:dohvatiPodatke,
    iscrtajVjezbe:iscrtajVjezbe,
    iscrtajZadatke:iscrtajZadatke
}
}());