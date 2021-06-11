class Dustbin{
    constructor(x,y){

        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=213;
        this.wallThickness=20;

        this.image = loadImage("dustbingreen.png");
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});
        this.leftBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
        this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
          
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display(){
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftBody.position;
        var posRight=this.rightBody.position;

        push();
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        fill(255);
        //rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
        translate(posRight.x,posRight.y);
        rectMode(CENTER);
        fill(255);
        //rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
        translate(posBottom.x,posBottom.y);
       imageMode(CENTER);
       fill(255);
       image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
       pop();

    }
}