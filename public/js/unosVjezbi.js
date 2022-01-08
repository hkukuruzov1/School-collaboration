
function noviBroj(){
    VjezbeAjax.dodajInputPolja(document.getElementById("zadaci"),document.getElementById("brojZadataka").value);
}
function saljiPostaru(){
    let stringeroni='{"brojVjezbi":';
        var pomoc=parseInt(document.getElementById("brojZadataka").value);
        stringeroni+=pomoc;
        stringeroni+=',"brojZadataka":[';
        let string='[';
        for(let i=0;i<document.getElementById("brojZadataka").value;i++){
            console.log(i);
            string+=document.getElementById("z"+i).value;
            if(i!=document.getElementById("brojZadataka").value-1)
            string+=",";
        }
        string+=']';
        console.log(string);
        VjezbeAjax.posaljiPodatke({"brojVjezbi":pomoc,"brojZadataka":JSON.parse(string)},(er,dat) =>{
            if(er==null)
            console.log("Uspješno poslani podaci!")
            else
            console.log("Neuspješno poslani podaci")
        });
}