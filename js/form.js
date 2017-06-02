$('#dbType').change(function(){
   selection = $(this).val();
   switch(selection)
   {
       case 'professor':
           $('#nomeTurma').show();
           $('#senhaTurma').show();
           break;
       default:
           $('#nomeTurma').hide();
           $('#senhaTurma').hide();
           break;
   }
});
function showTip() {
   document.getElementById('tipDiv1').style.display = "block";
}
function hideTip() {
   document.getElementById('tipDiv1').style.display = "none";
}
function validatepaste(e) {
    //var ctrldown =  e.ctrlKey ? e.ctrlKey : ((e.keyCode === 17) ? true : false);
    var pastedata = e.clipboardData.getData('text/plain');
    if (isNaN(pastedata)) {
        e.preventDefault();
        console.log("PASTE FAIL!");
        console.log(pastedata);
        return false;
    } else {
        console.log("PASTE!");
        console.log(pastedata);
    }
}

function validate(e) {
    //getting key code of pressed key
    var keycode = (e.which) ? e.which : e.keyCode;
    var phn = document.getElementById('textarea');
    //comparing pressed keycodes
    if ((keycode < 48 || keycode > 57) && keycode !== 13) {
        e.preventDefault();
        console.log("FAIL");
        return false;
    } else {
        console.log("OK!");
    }
}
function correct(){
  var DynamicMJ = {
    formula: document.getElementById("formula"),

    update: function () {
      var a = document.getElementById("caminho_percorrido_num").value;
          b = document.getElementById("caminho_percorrido_den").value;
      var c = document.getElementById("caminho_percorrido").value;
      var tex = "\\text{"+c+" }\\   \\frac{"+a+"}{"+b+"}";
      this.formula.innerHTML = "\\["+tex+"\\]";
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.formula]);
    }
  };
  DynamicMJ.update();
}

function ajustaProgressBar(valor, conteudo){
  if(conteudo == 1){
    totalquestoes = 7;
    console.log("Leitura de Frações");
  }
  else if (conteudo == 2){
    totalquestoes = 3;
    console.log("comparação de Frações");
  }
console.log("ajustando..");
  val = (valor*100)/totalquestoes;
  $('.progress-bar').css('width', val+'%').attr('aria-valuenow', val);
}




$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
