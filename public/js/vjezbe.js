 function usao(){
 console.log("uso")
    VjezbeAjax.dohvatiPodatke((err,data)=>
    {
        if(err==null)
        VjezbeAjax.iscrtajVjezbe(document.getElementById("odabirVjezbe"),JSON.parse(data))
    })
}
window.onload = usao;
function klik(x){
    console.log(x)
VjezbeAjax.iscrtajZadatke(x,parseInt(x.value))

}
