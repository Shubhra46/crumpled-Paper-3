class Paper{
    constructor(x,y,width,height){
        var options = {

            'restitution':0.3,
            'friction':0.1,
            'density': 0.1,  
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);

       

    }

    display(){
       

       var paperpos=this.body.position;		
       push()
       translate(paperpos.x, paperpos.y);
       // rectMode(CENTER)
       rotate(this.body.angle)
       
       imageMode(CENTER);
       
       image(this.image, 0,0,this.width, this.height);
       pop()




    }
};