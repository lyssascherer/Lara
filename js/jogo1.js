var stage;
var queue;
var output, lastPhase;





function initi() {
    stage = new createjs.Stage("mycanvas");

    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", handleComplete);
    queue.loadManifest([{
        id: "sound",
        src: "assets/blop.mp3"
    }])

}

function handleComplete(event) {

    var fundo_bt_comecar = new createjs.Shape();
    fundo_bt_comecar.name = "fundo_bt_comecar";
    fundo_bt_comecar.graphics.setStrokeStyle(1).beginStroke("black").beginFill("#28a2b3").drawRoundRect(0, 0, 150, 60, 10);

    var lb_comecar = new createjs.Text("começar", "bold 24px Arial", "#FFFFFF");
    lb_comecar.name = "lb_comecar";
    lb_comecar.textAlign = "center";
    lb_comecar.textBaseline = "middle";
    lb_comecar.x = 150 / 2;
    lb_comecar.y = 60 / 2;

    var bt_comecar = new createjs.Container();
    bt_comecar.name = "bt_comecar";
    bt_comecar.x = (420);
    bt_comecar.y = 300;
    bt_comecar.addChild(fundo_bt_comecar, lb_comecar);
    stage.addChild(bt_comecar, output);

    bt_comecar.on("pressup", function(evt) {
        //showText();
        fase1();
        console.log("oii");
    })


    stage.update();
}
function fase1(){
  stage.removeAllChildren();

  var lb_pontos = new createjs.Text("Moedas: "+ pontos, "bold 20px Arial", "#000");
  //lb_descricao.textAlign = "center";
  lb_pontos.x = 1000;
  lb_pontos.y = 10;
  stage.addChild(lb_pontos);

  var fracao = [];
  fracao = randFrac(fracao);
  segunda = true;
  var lb_descricao = new createjs.Text("Encontre a fração equivalente a \""+ gerarString(fracao[0],fracao[1]) + "\" e arraste até o quadrado!", "bold 20px Arial", "#000");
  //lb_descricao.textAlign = "center";
  lb_descricao.x = 10;
  lb_descricao.y = 10;
  stage.addChild(lb_descricao);
  var nume = Math.floor(Math.random() * 6) + 1;
  console.log("numerador: "+nume);
  var deno = Math.floor(Math.random() * 6) + 1;
  console.log("Denominador: "+deno);

  //QUADRADO
  var lb_aqui = new createjs.Text("AQUI", "bold 14px Lato", "#000");
  lb_aqui.textAlign = "center";
  lb_aqui.x += 50;
  lb_aqui.y += 40;

  var box = new createjs.Shape();
  box.graphics.setStrokeStyle(2).beginStroke("black").rect(0, 0, destHeight, destWidth);
  box.id = 0;

  var destination = new createjs.Container();
  destination.x = destinationx;
  destination.y = destinationy;
  destination.setBounds(350, 50, destHeight, destWidth);
  destination.addChild(lb_aqui, box);
  stage.addChild(destination);

   //fracao = randFrac(fracao);
   circulo_resposta = (Math.floor(Math.random() * 6) + 1);
   console.log(circulo_resposta);
    var circulos = [];
    for(a = 1;a<7;a=a+1){
      if(a == circulo_resposta){
        var circle = new Circulo(100,(100*a),fracao[0],fracao[1] ,0, destination, box);
        console.log("id resposta:"+ circle.id);
        circulos = circulos.concat(circle);
        var tests= [2,5];
        fracao = fracao.concat(tests);
        continue;
      }
      fracao = randFrac(fracao);
      var circle = new Circulo(100,(100*a),fracao[a*2] ,fracao[(a*2)+1] ,a, destination, box);
      circle.id = a;
      circulos = circulos.concat(circle);
    }


//--------------------------------------------------------------------------------
//        PAREI AQUI: FALTA VALIDAR A RESPOSTA CORRETA
//--------------------------------------------------------------------------------

    var bt_fundo_confirma = new createjs.Shape();
    bt_fundo_confirma.name = "bt_fundo_confirma";
    bt_fundo_confirma.graphics.setStrokeStyle(1).beginStroke("black").beginFill("#28a2b3").drawRoundRect(0, 0, 150, 60, 10);

    var lb_bt_confirma = new createjs.Text("Confirmar", "bold 24px Arial", "#FFFFFF");
    lb_bt_confirma.name = "lb_bt_confirma";
    lb_bt_confirma.textAlign = "center";
    lb_bt_confirma.textBaseline = "middle";
    lb_bt_confirma.x = 150 / 2;
    lb_bt_confirma.y = 60 / 2;

    var bt_confirma = new createjs.Container();
    bt_confirma.name = "bt_confirma";
    bt_confirma.x = 500;
    bt_confirma.y = 70;
    bt_confirma.addChild(bt_fundo_confirma, lb_bt_confirma);
    stage.addChild(bt_confirma, output);

    bt_confirma.on("pressup", function(evt) {
        //showText();
        //fase1();

        if(correto==true){
          console.log("truee");
          stage.removeAllChildren();
          stage.update();
          console.log("Parabéns!");
          var parabens = new createjs.Text("Parabéns!", "bold 50px Arial", "#000");
          parabens.textAlign = "center";
          parabens.x = canvaWidth/2;
          parabens.y = canvaHeight/2;
          stage.addChild(parabens);
          pontos = pontos+1;
          //BOTÃO VOLTAR
          var bt_fundo_voltar = new createjs.Shape();
          bt_fundo_voltar.name = "bt_fundo_voltar";
          bt_fundo_voltar.graphics.setStrokeStyle(1).beginStroke("black").beginFill("#28a2b3").drawRoundRect(0, 0, 150, 60, 10);

          var lb_bt_voltar = new createjs.Text("Voltar", "bold 24px Arial", "#FFFFFF");
          lb_bt_voltar.name = "lb_bt_voltar";
          lb_bt_voltar.textAlign = "center";
          lb_bt_voltar.textBaseline = "middle";
          lb_bt_voltar.x = 150 / 2;
          lb_bt_voltar.y = 60 / 2;

          var bt_voltar = new createjs.Container();
          bt_voltar.name = "bt_voltar";
          bt_voltar.x = (canvaWidth/2)-70;
          bt_voltar.y = (canvaHeight/2)+100;
          bt_voltar.addChild(bt_fundo_voltar, lb_bt_voltar);
          stage.addChild(bt_voltar, output);
          stage.update();
          bt_voltar.on("pressup", function(evt) {
            fase1();
          })

          stage.update();
        }else {
          stage.removeAllChildren();
          stage.update();
          var incorreto = new createjs.Text("A resposta correta era:", "bold 15px Arial", "#000");
        //  incorreto.textAlign = "center";
          incorreto.x = 10;
          incorreto.y = 10;
          stage.addChild(incorreto);
          console.log("num=" + circulos[circulo_resposta-1].numerador);
          console.log("deno=" + circulos[circulo_resposta-1].denominador);
          var circulo_correto = new Circulo(80,80,circulos[circulo_resposta-1].numerador,circulos[circulo_resposta-1].denominador,0, destination, box);

          //BOTÃO VOLTAR
          var bt_fundo_voltar = new createjs.Shape();
          bt_fundo_voltar.name = "bt_fundo_voltar";
          bt_fundo_voltar.graphics.setStrokeStyle(1).beginStroke("black").beginFill("#28a2b3").drawRoundRect(0, 0, 150, 60, 10);

          var lb_bt_voltar = new createjs.Text("Voltar", "bold 24px Arial", "#FFFFFF");
          lb_bt_voltar.name = "lb_bt_voltar";
          lb_bt_voltar.textAlign = "center";
          lb_bt_voltar.textBaseline = "middle";
          lb_bt_voltar.x = 150 / 2;
          lb_bt_voltar.y = 60 / 2;

          var bt_voltar = new createjs.Container();
          bt_voltar.name = "bt_voltar";
          bt_voltar.x = 10;
          bt_voltar.y = 150;
          bt_voltar.addChild(bt_fundo_voltar, lb_bt_voltar);
          stage.addChild(bt_voltar, output);
          stage.update();
          bt_voltar.on("pressup", function(evt) {
            fase1();
          })
        }
    })


    stage.update();
}

function Circulo (x, y, numerador, denominador, id, destination, box) {
    //this.type = type;
    this.color = "red";
    this.color_background = "white";
    this.x = x;
    this.y = y;
    this.numerador = numerador;
    this.denominador = denominador;


    var shape = new createjs.Shape().set({x, y});
    var angle = 0;
    var thisArc =360/denominador;
    shape.id = id;
    while (angle <= 360) {
        var startAngle = angle * Math.PI/180;
        var endAngle = Math.min(360, angle+thisArc)*Math.PI/180;

        shape.graphics.setStrokeStyle(1).beginStroke("black");
        if (angle <= thisArc*(numerador-1)) {
          shape.graphics.beginFill(this.color);//this.color
        }else {
          shape.graphics.beginFill(this.color_background);
        }
        shape.graphics.moveTo(0,0)
        shape.graphics.arc(0,0,30,startAngle,endAngle);
        angle += thisArc;
    }

    shape.setBounds(this.x, this.y, 30 * 2, 30 * 2);
    stage.addChild(shape);

    shape.on("pressup", function(evt) {
        console.log("up");
    })

    shape.on("pressmove", function(evt) {
        evt.currentTarget.x = evt.stageX;
        evt.currentTarget.y = evt.stageY;
        //console.log(destination.x);
        stage.update(); //much smoother because it refreshes the screen every pixel movement instead of the FPS set on the Ticker
        if (intersect(evt.currentTarget, destination)) {
            evt.currentTarget.alpha = 0.2;
            //console.log("oi dentro ");
            box.graphics.clear();
            box.graphics.setStrokeStyle(3)
                .beginStroke("#0066A4")
                .rect(0, 0, destHeight, destWidth);

        } else {
            evt.currentTarget.alpha = 1;
            box.graphics.clear();
            box.graphics.setStrokeStyle(2).beginStroke("black").rect(0, 0, destHeight, destWidth);
            //console.log("oi fora ");
        }
    });
    shape.on("pressup", function(evt) {
        if (intersect(evt.currentTarget, destination)) {
            shape.x = destination.x + destWidth / 2;
            shape.y = destination.y + destHeight / 2;
            shape.alpha = 1;
            box.graphics.clear();
            box.graphics.setStrokeStyle(2).beginStroke("black").rect(0, 0, destHeight, destWidth);
            correto = false;
            if(box.id == shape.id){
              correto = true;
            }
            stage.update(evt);


        }


    });


}

function randFrac(listFrac){
  //console.log("listFrac ants"+listFrac);
  var denomi = (Math.floor(Math.random() * 6) + 2);

  var numera = (Math.floor(Math.random() * 6) + 1);
//  console.log("aqui");
  while(denomi<=numera){
    numera = (Math.floor(Math.random() * 6) + 1);
  //  console.log("aquidois");
  }
  if(segunda){
    for(i=0;i<listFrac.length-1;i++){
      if(numera == listFrac[i] && denomi == listFrac[i+1]){
        denomi = (Math.floor(Math.random() * 6) + 2);

        numera = (Math.floor(Math.random() * 6) + 1);
        while(denomi<=numera){
          numera = (Math.floor(Math.random() * 6) + 1);
        //  console.log("eta1");
        }
        i=0;
        //console.log("eta2");
      }
    //  console.log("eta3");
    }
  //  console.log("eta4");
  }

  var frac = [numera,denomi];
//  console.log("frac: "+ frac[0] + "/"+frac[1]);
  listFrac = listFrac.concat(frac);
//  console.log("listFrac dps"+listFrac);
//  console.log("oi1");
  return listFrac;
}

function gerarString(nume, deno){
  var fracao = [nume,deno];
  console.log("tste "+ fracao);
  var string_Fracao = [];
  for(i=0;i<2;i++){

    switch (fracao[i]) {
      case 1:
        string_Fracao[i] = "um";
        break;
      case 2:
        string_Fracao[i] = "dois";
        break;
      case 3:
        string_Fracao[i] = "três";
        break;
      case 4:
        string_Fracao[i] = "quatro";
        break;
      case 5:
        string_Fracao[i] = "cinco";
        break;
      case 6:
        string_Fracao[i] = "seis";
        break;
      case 7:
        string_Fracao[i] = "sete";
        break;
    }
  }
  return (string_Fracao[0] + " sobre " + string_Fracao[1]);
}


function showText() {
    console.log('cheguei');
    var ball = new createjs.Shape();
    ball.addEventListener("click", handlClick);
    ball.graphics.beginFill("#24f1c0").drawCircle(0, 0, 50);
    ball.x = 50;
    ball.y = 200;

    createjs.Tween.get(ball, {
        loop: true
    }).to({
        x: 450
    }, 3000).to({
        x: 50
    }, 3000);
    createjs.Ticker.addEventListener("tick", tick);
    stage.addChild(ball);
    stage.update();

}

function handlClick(event) {
    createjs.Sound.play("sound");
    console.log("clicked");
}

function tick(event) {
    stage.update();
}



function intersect(obj1, obj2) {
    var objBounds1 = obj1.getBounds().clone();
    var objBounds2 = obj2.getBounds().clone();

    var pt = obj1.globalToLocal(objBounds2.x, objBounds2.y);

    var h1 = -(objBounds1.height / 2 + objBounds2.height);
    var h2 = objBounds2.width / 2;
    var w1 = -(objBounds1.width / 2 + objBounds2.width);
    var w2 = objBounds2.width / 2;


    if (pt.x > w2 || pt.x < w1) return false;
    if (pt.y > h2 || pt.y < h1) return false;

    return true;
}
