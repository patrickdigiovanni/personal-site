//Particolors!
 
//Adapted from
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
 
ArrayList<ParticleSystem> systems;
 
void setup() {
  size(640, 360);
  colorMode(HSB, 100);
  background(0);
  systems = new ArrayList<ParticleSystem>();
  frameRate(60);
}
 
void draw() {
 background(0);
  for (ParticleSystem ps : systems) {
    ps.run();
    ps.addParticle();
  }
}
void mousePressed(){
    systems.add(new ParticleSystem(new PVector(mouseX, mouseY)));
}
 
 
// Simple Particle System
 
class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;
  float lifespan;
  float a = 0.0;
  float aVel = 0.0;
  float aAcc;
  
 
  Particle(PVector l) {
    acceleration = new PVector(0,0.05);
    velocity = new PVector(random(-1,1),random(-2,0));
    location = l.get();
    lifespan = 255.0;
  }
 
  void run() {
   
    update();
    display();
  }
 
  // Method to update location
  void update() {
    
    velocity.add(acceleration);
    location.add(velocity);
    aAcc = acceleration.x/2;
    aVel += aAcc;
    aVel = constrain(aVel,-0.2,0.1);
    
    
    lifespan -= 2;
  }
 
  // Method to display
  void display() {
    float col = map(sin(location.x)*noise(a), -.5,1, 0, 80);
    stroke(0,lifespan);
    strokeWeight(2);
    fill(col,80,100, lifespan);
    rectMode(CENTER);
    pushMatrix();
    translate(location.x,location.y);
    rotate(a);
    rect(0,0,15,random(20));
    popMatrix();
    a += aVel;
  }
  
  // Is the particle still useful?
  boolean isDead() {
    if (lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
 
 
class ParticleSystem {
  ArrayList<Particle> particles;
  PVector origin;
 
  ParticleSystem(PVector location) {
    origin = location.get();
    particles = new ArrayList<Particle>();
  }
 
  void addParticle() {
    particles.add(new Particle(origin));
  }
 
  void run() {
    for (int i = particles.size()-1; i >= 0; i--) {
      Particle p = particles.get(i);
      p.run();
      if (p.isDead()) {
        particles.remove(i);
      }
    }
  }
  
 
}