function saljiStudenta(){
    StudentAjax.postaviGrupu(document.getElementById("1").value,document.getElementById("2").value,
    (er,dat) =>{
        if(er==null){
            let ele = document.getElementById('ajaxstatus');
            ele.innerHTML += dat+"<br>";
        }
        else{
        let ele = document.getElementById('ajaxstatus');
            ele.innerHTML += er+"<br>";
    }
}
    )
}
    

