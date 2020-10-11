class box{
    constructor(){
        var options = {
        restitution: 1
        }

        this.body = Bodies.rectangle(200,100,50,50, options);
        World.add(world,this.body);


    }
    display(){
        var object = this.body.position
        rectMode (CENTER) 
        rect(object.x,object.y,this.width,this.height)
    }
}