function saljiStudenta(){
    StudentAjax.dodajStudenta(
       {ime: document.getElementById("1").value,prezime:document.getElementById("2").value,index:document.getElementById("3").value,grupa:document.getElementById("4").value}
        ,(er,dat) =>{
            if(er==null){
                let ele = document.getElementById('ajaxstatus');
                ele.innerHTML += dat+"<br>";
            }
            else{
            let ele = document.getElementById('ajaxstatus');
                ele.innerHTML += er+"<br>";
        }
    })
}