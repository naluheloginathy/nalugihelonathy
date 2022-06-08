let larguraTela=600;
let comprimentoTela=800;
let xBolinha=larguraTela/2;
let yBolinha=larguraTela/2;
let velocidadeXBolinha=6;
let velocidadeYBolinha=6;
let diametroBolinha=20;
let raioBolinha=diametroBolinha/2;
let larguraRaquete=15;
let comprimentoRaquete=80;
let xMinhaRaquete=10;
let yRaquete=300;
let xRaqueteOponente=comprimentoTela - larguraRaquete - 10;
let yRaqueteOponente=300;
let colidiu=false;
let meusPontos= 0;
let pontosdoOponente= 0;

function setup(){
  createCanvas(comprimentoTela,larguraTela);
  }

function draw() {
  background(150);
 criaBolinha();
 moveBolinha();
 colisaoBolinha();
 criaMinhaRaquete(xMinhaRaquete, yRaquete);
  criaMinhaRaquete(xRaqueteOponente, yRaqueteOponente);
 moveRaquete();
  colisaoRaquete();
  mostraPlacar();
  marcarPontos();
 }

function criaBolinha(){
  circle(xBolinha,yBolinha,diametroBolinha);
  
}

function moveBolinha(){
  xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;
 }
 
 function colisaoBolinha() {
   if (xBolinha + raioBolinha>comprimentoTela || xBolinha-raioBolinha<0){
   velocidadeXBolinha=velocidadeXBolinha* -1;
    }
if (yBolinha + raioBolinha>larguraTela || yBolinha-raioBolinha<0){
    velocidadeYBolinha=velocidadeYBolinha*-1;
    }
 }
function criaMinhaRaquete(posicaoX,posicaoY){
 rect (posicaoX,posicaoY,larguraRaquete,comprimentoRaquete);
  
}
  function moveRaquete(){
    if (keyIsDown(UP_ARROW)){ 
      yRaquete-=10;
    
  }
if (keyIsDown(DOWN_ARROW)){
  yRaquete+=10;
    
}

  }
    function colisaoRaquete(){
   if(
   xBolinha - raioBolinha < xMinhaRaquete + larguraRaquete &&
     yBolinha - raioBolinha < yRaquete + comprimentoRaquete &&
     yBolinha + raioBolinha > yRaquete 
     ){
     velocidadeXBolinha *= -1;
   } 
    }
   
function mostraPlacar(){
  fill(255);
  textSize(32);
  text(meusPontos, 200, 50);
  text(pontosdoOponente, 600, 50);
 }
  function marcarPontos(){
  if( 
    xBolinha > 790){ 
   pontosdoOponente += 1 
  }

if(
  xBolinha < 10){
  meusPontos += 1
}  

    }

  
  
  
  
  

 
  
  
   
  







  


