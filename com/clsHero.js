class clsHero{
    constructor(pCtx){
        this.ctx=pCtx
        this.sprite=new clsSprite(pCtx, 'heroe',"imgs/Hero/",  36 , '.png', 30, 30, 1.9, 1, 9);
        this.sprite.flw.pt.x=375;
        this.sprite.flw.pt.y=-300;
        ///////////////////////
        this.sprite.flw.yfloor=485;
        this.sprite.flw.gravity=0.35;
        this.jump_accel = this.sprite.flw.gravity * 40;
        this.dy = 0;
        this.onGround=true;
    }
    ///////////////////////////////////////////////////////////////////////////
    /**
     * Esta funcion define los frames segun la direccion en la que se mueve el personaje
     */
    takeDirection(pDir){
        if(pDir == "left"){
            this.sprite.sframe=13;
            this.sprite.eframe=20;
        }
        if(pDir == "right"){
            this.sprite.sframe=5;
            this.sprite.eframe=12;
        }
    }
    ///////////////////////////////////////////////////////////////////////////
    /**
     * Esta funcion define los frames segun la direccion en la que se movia el personaje
     */
    HeroStop(pDir){
        if (pDir == "left"){
            this.sprite.sframe=21;
            this.sprite.eframe=25;
        }
        if(pDir == "right"){
            this.sprite.sframe=0;
            this.sprite.eframe=4;
        }
    }
    ///////////////////////////////////////////////////////////////////////////
    /**
     * Esta funcion cambia el estado de los frames cuando el personaje muere
     */
    HasACollision(){
        this.sprite.GoToAndStop();
    }
    ///////////////////////////////////////////////////////////////////////////
    /**
     * Esta funcion sirve para calcular la subida y la caida del personaje al saltar
     */
    update(){
        if(this.onGround){
            return;
        }else{
           this.dy += this.sprite.flw.gravity;
           this.sprite.flw.pt.y += this.dy;
    
           if(this.sprite.flw.pt.y > this.sprite.flw.yfloor){
                this.dy = 0;
                this.sprite.flw.pt.y =  this.sprite.flw.yfloor; 
                this.onGround = true;
          }
        }
    }
    ///////////////////////////////////////////////////////////////////////////
    /**
     * Funcion que se activa al saltar y cambia la variable onGround a falso
     */
    jump(){
     if(this.onGround){
         this.onGround = false;
         this.dy -= this.jump_accel;
      }
    }
    ///////////////////////////////////////////////////////////////////////////
    /**
     * Funcion de dibujado del personaje
     */
    Draw(){
        this.sprite.Draw();
    }
    ////////////////////////////////////////////////////////////////////////////
}