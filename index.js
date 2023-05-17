
function userHtml(){
    var disname=document.getElementById("disname").value;
    if(disname=='cbe'){
        window.open('cbe.html');
    }else if(disname=='mdu'){
        window.open('mdu.html');
    }else if(disname=='tpr'){
        window.open('tpr.html');
    }else if(disname=='pol'){
        window.open('pol.html');
    }else{
        window.open('error.html');
    }
}