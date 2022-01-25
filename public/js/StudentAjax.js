let StudentAjax=(function(){
    const dodajStudenta=function(student,fnCallback){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200){
                
                fnCallback(null,ajax.responseText);
            }
            if (ajax.readyState == 4 && ajax.status == 400)
                fnCallback(ajax.responseText,null);
        }
        ajax.open("POST","http://localhost:3000/student",true);
        ajax.setRequestHeader('Content-type', 'application/json');
        ajax.send(JSON.stringify(student));
    }
    const postaviGrupu=function(index,grupa,fnCallback){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200){
                
                fnCallback(null,ajax.responseText);
            }
            if (ajax.readyState == 4 && ajax.status == 400)
                fnCallback(ajax.responseText,null);
        }
        ajax.open("PUT","http://localhost:3000/student/"+index,true);
        ajax.setRequestHeader('Content-type', 'application/json');
        ajax.send(JSON.stringify({grupa:grupa}));
    }
    const dodajBatch=function(csvStudenti,fnCallback){
        var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200){
            
            fnCallback(null,ajax.responseText);
        }
        if (ajax.readyState == 4 && ajax.status == 400)
            fnCallback(ajax.responseText,null);
    }
    ajax.open("POST","http://localhost:3000/batch/student",true);
    ajax.setRequestHeader('Content-type', 'text/plain');
    ajax.send(csvStudenti);
    }
    return{
        dodajStudenta:dodajStudenta,
        postaviGrupu:postaviGrupu,
        dodajBatch:dodajBatch
    }
    }());