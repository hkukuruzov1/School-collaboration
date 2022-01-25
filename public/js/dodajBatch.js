function saljiStudenta(){
    console.log(document.getElementById("1").value)
    StudentAjax.dodajBatch(
       document.getElementById("1").value
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