const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var motor, mundo;
var caja1, pig1;
var caja2, pig2;
var caja3;
var caja4;
var caja5;
var plataforma;

function preload() {
    fondo = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    motor = Engine.create();  
    mundo = motor.world;

    
    ground = new Piso(600,height,1200,20);
    plataforma = new Piso(135,300,270,180);

    caja1 = new Caja(700,320,70,70);
    caja2 = new Caja(920,320,70,70);
    pig1 = new Pig(810, 350);
    base1 = new Base(810,260,300, PI/2);

    caja3 = new Caja(700,240,70,70);
    caja4 = new Caja(920,240,70,70);
    pig3 = new Pig(810, 220);

    base2 =  new Base(810,180,300, PI/2);

    caja5 = new Caja(810,160,70,70);
    base3 = new Base(760,120,150, PI/7);
    base5 = new Base(870,120,150, -PI/7);

    ave_bird = new Bird(100,100);
}

function draw(){
    background(fondo);
    Engine.update(motor);
   
   caja1.display();
    caja2.display();
    ground.display();
    pig1.display();
    base1.display();

    caja3.display();
    caja4.display();
    pig3.display();
    base2.display();
    plataforma.display();

    caja5.display();
    base3.display();
    base5.display();

    ave_bird.display();
}
