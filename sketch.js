
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(0);


}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:moseX, y:mouseY});
}

