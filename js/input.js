var stage;
var stage2;
var queue;
var output, lastPhase;





function initi() {
    stage = new createjs.Stage("canvas");
    stage2 = new createjs.Stage("exemplo");

    exemplocanva();

    handleComplete()


}
function exemplocanva(){
  addRoundedSquare(240, 10,40, 5, "#ffffff");
  addRoundedSquare(285, 10,40, 5, "#ffffff");
  addRoundedSquare(330, 10,40, 5, "#693518");
  addRoundedSquare(375, 10,40, 5, "#693518");
  addRoundedSquare(240, 55,40, 5, "#ffffff");
  addRoundedSquare(285, 55,40, 5, "#693518");
  addRoundedSquare(330, 55,40, 5, "#693518");
  addRoundedSquare(375, 55,40, 5, "#693518");
  stage2.update();

}

function handleComplete() {
var cascavel = new createjs.Text("Cascavel", "20px Arial", "rgba(0, 0, 0, 1)");
cascavel.x = 20;
cascavel.y = 20;
 stage.addChild(cascavel);
 var foz = new createjs.Text("Foz do Iguaçu", "20px Arial", "rgba(0, 0, 0, 1)");
 foz.x = 440;
 foz.y = 20;
  stage.addChild(foz);

  var txt_percorrido = new createjs.Text("Caminho percorrido", "20px Arial", "rgba(0, 0, 0, 1)");
  txt_percorrido.x = 440;
  txt_percorrido.y = 60;
   stage.addChild(txt_percorrido);

   var txt_faltante = new createjs.Text("Caminho que falta", "20px Arial", "rgba(0, 0, 0, 1)");
   txt_faltante.x = 440;
   txt_faltante.y = 100;
    stage.addChild(txt_faltante);


      var line = new createjs.Shape();
      stage.addChild(line);
      line.graphics.setStrokeStyle(2).beginStroke("rgba(0, 0, 0, 1)");
      line.graphics.moveTo(120, 30);
      line.graphics.lineTo(420, 30);
      line.graphics.endStroke();

      var lineIni = new createjs.Shape();
      stage.addChild(lineIni);
      lineIni.graphics.setStrokeStyle(2).beginStroke("rgba(0, 0, 0, 1)");
      lineIni.graphics.moveTo(120, 20);
      lineIni.graphics.lineTo(120, 40);

      var lineFim = new createjs.Shape();
      stage.addChild(lineFim);
      lineFim.graphics.setStrokeStyle(2).beginStroke("rgba(0, 0, 0, 1)");
      lineFim.graphics.moveTo(420, 20);
      lineFim.graphics.lineTo(420, 40);

      var lineIni2 = new createjs.Shape();
      stage.addChild(lineIni2);
      lineIni2.graphics.setStrokeStyle(2).beginStroke("rgba(0, 0, 0, 1)");
      lineIni2.graphics.moveTo(120, 60);
      lineIni2.graphics.lineTo(120, 80);

      var lineFim2 = new createjs.Shape();
      stage.addChild(lineFim2);
      lineFim2.graphics.setStrokeStyle(2).beginStroke("rgba(0, 0, 0, 1)");
      lineFim2.graphics.moveTo(420, 100);
      lineFim2.graphics.lineTo(420, 120);

      //stage.addChild(new createjs.Shape()).set({x:120,y:30}).graphics.f("black").dc(0,0,5);
      stage.addChild(new createjs.Shape()).set({x:170,y:30}).graphics.f("black").dc(0,0,5);
      stage.addChild(new createjs.Shape()).set({x:220,y:30}).graphics.f("red").dc(0,0,5);
      stage.addChild(new createjs.Shape()).set({x:270,y:30}).graphics.f("black").dc(0,0,5);
      stage.addChild(new createjs.Shape()).set({x:320,y:30}).graphics.f("black").dc(0,0,5);
      stage.addChild(new createjs.Shape()).set({x:370,y:30}).graphics.f("black").dc(0,0,5);

      var percorrido = new createjs.Shape();
      stage.addChild(percorrido);
      percorrido.graphics.setStrokeStyle(2).beginStroke("rgba(0, 0, 0, 1)");
      percorrido.graphics.moveTo(120, 70);
      percorrido.graphics.lineTo(220, 70);
      percorrido.graphics.endStroke();

      stage.addChild(new createjs.Shape()).set({x:170,y:70}).graphics.f("black").dc(0,0,5);
      stage.addChild(new createjs.Shape()).set({x:220,y:70}).graphics.f("red").dc(0,0,5);

      var falta = new createjs.Shape();
      stage.addChild(falta);
      falta.graphics.setStrokeStyle(2).beginStroke("rgba(0, 0, 0, 1)");
      falta.graphics.moveTo(220, 110);
      falta.graphics.lineTo(420, 110);
      falta.graphics.endStroke();
      stage.addChild(new createjs.Shape()).set({x:220,y:110}).graphics.f("red").dc(0,0,5);
      stage.addChild(new createjs.Shape()).set({x:270,y:110}).graphics.f("black").dc(0,0,5);
      stage.addChild(new createjs.Shape()).set({x:320,y:110}).graphics.f("black").dc(0,0,5);
      stage.addChild(new createjs.Shape()).set({x:370,y:110}).graphics.f("black").dc(0,0,5);



    stage.update();
}
function addRoundedSquare(x, y, s, r, fill) {
  var square = new createjs.Shape();
  square.graphics.setStrokeStyle(5).beginStroke("rgba(83, 43, 24, 1)").beginFill(fill).drawRoundRect(0, 0, s, s, r);

  square.x = x;
  square.y = y;
  square.name = "square";
  //square.on("pressmove",drag);
  stage2.addChild(square);
}
