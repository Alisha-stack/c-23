class Box{
//properties
constructor(x,y,width,height)
{
    var options ={
            restitution: 1.0
        }
    
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);


}


//functions
display()
{
    var pos=this.body.position;
    var an=this.body.angle
   push(); 
   translate(pos.x,pos.y)
    rotate(an)
    
rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();

}




}