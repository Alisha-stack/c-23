class Ground{
    //properties
    constructor(x,y,width,height)
    {
        var ground_options={
            isStatic:true
        }
    this.ground=Bodies.rectangle(x,y,width,height,ground_options);
    this.width=width;
    this.height=height;
    World.add(world,this.ground)
    }
    
    display()
    {
        //NAMESPACE
    var pos=this.ground.position;
    rectMode(CENTER);
    fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
    }