float n;
 
 
void setup()
{
  colorMode(HSB);
  size(300, 300, OPENGL);
   n = 0.0f;
   frameRate(30);
 
    
 
  
}
 
void draw()
{
    
 
  noStroke();
 
  camera();
  lights();
  background(0);
 
  scale(.5);
translate(width/4, height/4);
  rotateY(sin(n)* PI);
  for ( int i = 1; i <10; i++) {
    fill(map(sin(n*i+5), -1, 1, 100, 200),  150);
    rotateY(n*i);
       rotateX(noise(n/100));
    for (int  j = 1; j < 10; j++) {
      rotateZ(noise(j)*n/j);
      for ( int k = 1; k < 5; k++ ) {
        pushMatrix();
        
        translate(i * sin(n)*width/20 *j, j*sin(n)* 5+ 1, k*cos(n)*20);
        sphereDetail(4);
        rotateY(noise(n)*i);
     
        rotateZ(sin(noise(n*2))*(-n*k));
        scale(sin(n)*0.85, sin(n)*0.5, sin(i)*1.25);
        n+=0.000009;
        if (i%3 == 0) {
          sphere(noise(i)*sin(n+i)* 50);
          
        }
         if(k%3 == 0){
          sphere(noise(j)*sin(n+j)* 50);
        }
        if(j%3 == 0 ){
          box(noise(k)*sin(n+k)* 50);
        }
        else
        {
 
          sphere(sin(n+k)* 50);
        }
        
        popMatrix();
      }
    }
  }
}