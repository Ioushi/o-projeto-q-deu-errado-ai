class   chão{
constructor(x,y,w,h){
    var config = {
        isStatic:true
 
    }
   this.h = h
   this.w = w 
    this.chao = Bodies.rectangle(x,y,w,h,config)
   World.add(world,this.chao)
}

display(){
    rectMode(CENTER)
    rect(this.chao.position.x,this.chao.position.y,this.w,this.h)}

}